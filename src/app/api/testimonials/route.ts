import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { defaultTestimonials } from '@/lib/testimonials/defaultTestimonials';
import { prepareTestimonials } from '@/lib/testimonials/testimonialCore';
import { createServerSupabaseClient, isSupabaseServiceRoleConfigured } from '@/lib/server/supabaseAdmin';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
const SETTINGS_KEY = 'main';

async function readFromSupabase() {
  const supabase = createServerSupabaseClient();
  if (!supabase) return null;
  const { data, error } = await supabase.from('client_testimonials').select('content').eq('key', SETTINGS_KEY).maybeSingle();
  if (error) {
    console.error('[testimonials] Supabase read error:', error.message);
    return null;
  }
  return data?.content || null;
}

export async function GET() {
  const saved = await readFromSupabase();
  return NextResponse.json({
    source: saved ? 'supabase' : 'default',
    testimonials: prepareTestimonials(saved || defaultTestimonials),
    needsSupabaseServiceRole: !isSupabaseServiceRoleConfigured,
  });
}

export async function PUT(request: Request) {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') return NextResponse.json({ error: 'Нет доступа. Войдите в админку.' }, { status: 401 });
  const body = await request.json().catch(() => null);
  const testimonials = prepareTestimonials(body?.testimonials || defaultTestimonials);
  const supabase = createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase не подключён. Отзывы сохранены локально.', testimonials }, { status: 503 });
  }
  const { error } = await supabase.from('client_testimonials').upsert({ key: SETTINGS_KEY, content: testimonials, updated_at: new Date().toISOString() });
  if (error) return NextResponse.json({ error: error.message, testimonials }, { status: 500 });
  return NextResponse.json({ ok: true, source: 'supabase', testimonials });
}
