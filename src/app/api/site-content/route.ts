import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { defaultSiteContent } from '@/lib/site-content/defaultSiteContent';
import { prepareSiteContent } from '@/lib/site-content/siteContentCore';
import { createServerSupabaseClient, isSupabaseServiceRoleConfigured } from '@/lib/server/supabaseAdmin';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const SETTINGS_KEY = 'main';

function isAdminSession(value?: string) {
  return value === 'true';
}

async function readFromSupabase() {
  const supabase = createServerSupabaseClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('site_settings')
    .select('content')
    .eq('key', SETTINGS_KEY)
    .maybeSingle();

  if (error) {
    console.error('[site-content] Supabase read error:', error.message);
    return null;
  }

  return data?.content || null;
}

export async function GET() {
  const saved = await readFromSupabase();
  return NextResponse.json({
    source: saved ? 'supabase' : 'default',
    content: prepareSiteContent({ ...defaultSiteContent, ...(saved || {}) }),
    needsSupabaseServiceRole: !isSupabaseServiceRoleConfigured,
  });
}

export async function PUT(request: Request) {
  const session = (await cookies()).get('admin_session');
  if (!isAdminSession(session?.value)) {
    return NextResponse.json({ error: 'Нет доступа. Войдите в админку.' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body?.content) {
    return NextResponse.json({ error: 'Нет данных для сохранения.' }, { status: 400 });
  }

  const content = prepareSiteContent({ ...defaultSiteContent, ...body.content });
  const supabase = createServerSupabaseClient();

  if (!supabase) {
    return NextResponse.json(
      {
        error: 'Supabase не подключён. Для сохранения на домене добавьте NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY и SUPABASE_SERVICE_ROLE_KEY.',
        content,
      },
      { status: 503 },
    );
  }

  const { error } = await supabase.from('site_settings').upsert({
    key: SETTINGS_KEY,
    content,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    console.error('[site-content] Supabase save error:', error.message);
    return NextResponse.json({ error: error.message, content }, { status: 500 });
  }

  return NextResponse.json({ ok: true, source: 'supabase', content });
}
