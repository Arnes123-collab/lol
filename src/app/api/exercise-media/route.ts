import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createServerSupabaseClient, isSupabaseServiceRoleConfigured } from '@/lib/server/supabaseAdmin';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BUCKET = 'exercise-media';
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
const MAX_VIDEO_SIZE = 25 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const ALLOWED_VIDEO_TYPES = new Set(['video/mp4', 'video/webm', 'video/quicktime']);

function extFromFile(file: File) {
  const nameExt = file.name.split('.').pop()?.toLowerCase();
  if (nameExt) return nameExt.replace(/[^a-z0-9]/g, '');
  if (file.type === 'image/jpeg') return 'jpg';
  if (file.type === 'image/png') return 'png';
  if (file.type === 'image/webp') return 'webp';
  if (file.type === 'image/gif') return 'gif';
  if (file.type === 'video/mp4') return 'mp4';
  if (file.type === 'video/webm') return 'webm';
  if (file.type === 'video/quicktime') return 'mov';
  return 'bin';
}

function safeName(value: string) {
  return value
    .toLowerCase()
    .replace(/ё/g, 'e')
    .replace(/[^a-zа-я0-9]+/gi, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80) || 'exercise-media';
}

export async function POST(request: Request) {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') {
    return NextResponse.json({ error: 'Нет доступа. Войдите в админку.' }, { status: 401 });
  }

  if (!isSupabaseServiceRoleConfigured) {
    return NextResponse.json({ error: 'Supabase Storage не подключён. В локальной версии используйте Data URL fallback.' }, { status: 503 });
  }

  const formData = await request.formData().catch(() => null);
  const file = formData?.get('file');
  const exerciseId = String(formData?.get('exerciseId') || 'new-exercise');
  const mediaType = String(formData?.get('mediaType') || 'image');

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'Файл не найден.' }, { status: 400 });
  }

  const isVideo = mediaType === 'video';
  if (isVideo) {
    if (!ALLOWED_VIDEO_TYPES.has(file.type)) return NextResponse.json({ error: 'Видео должно быть MP4, WEBM или MOV.' }, { status: 400 });
    if (file.size > MAX_VIDEO_SIZE) return NextResponse.json({ error: 'Видео должно быть до 25 МБ.' }, { status: 400 });
  } else {
    if (!ALLOWED_IMAGE_TYPES.has(file.type)) return NextResponse.json({ error: 'Фото/GIF должны быть JPG, PNG, WEBP или GIF.' }, { status: 400 });
    if (file.size > MAX_IMAGE_SIZE) return NextResponse.json({ error: 'Изображение должно быть до 10 МБ.' }, { status: 400 });
  }

  const supabase = createServerSupabaseClient();
  if (!supabase) return NextResponse.json({ error: 'Supabase не настроен.' }, { status: 503 });

  const ext = extFromFile(file);
  const path = `${safeName(exerciseId)}/${mediaType}-${Date.now()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error: uploadError } = await supabase.storage.from(BUCKET).upload(path, buffer, {
    contentType: file.type || 'application/octet-stream',
    upsert: true,
  });

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 });
  }

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return NextResponse.json({ ok: true, url: data.publicUrl, path });
}
