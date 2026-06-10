import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { defaultBrandProfile } from '@/lib/brand/defaultBrand';
import { createServerSupabaseClient, isSupabaseServiceRoleConfigured } from '@/lib/server/supabaseAdmin';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BRAND_KEY = 'main';

function mergeBrandProfile(input: any) {
  const incoming = input || {};
  const assets = defaultBrandProfile.assets.map((asset) => {
    const savedAsset = incoming.assets?.find((item: any) => item.key === asset.key);
    return { ...asset, ...(savedAsset || {}) };
  });

  return {
    ...defaultBrandProfile,
    ...incoming,
    achievements: Array.isArray(incoming.achievements) ? incoming.achievements : defaultBrandProfile.achievements,
    certificates: Array.isArray(incoming.certificates) ? incoming.certificates : defaultBrandProfile.certificates,
    assets,
  };
}

async function readFromSupabase() {
  const supabase = createServerSupabaseClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('trainer_brand')
    .select('profile')
    .eq('key', BRAND_KEY)
    .maybeSingle();

  if (error) {
    console.error('[brand] Supabase read error:', error.message);
    return null;
  }

  return data?.profile || null;
}

export async function GET() {
  const saved = await readFromSupabase();
  return NextResponse.json({
    source: saved ? 'supabase' : 'default',
    profile: mergeBrandProfile(saved),
    needsSupabaseServiceRole: !isSupabaseServiceRoleConfigured,
  });
}

export async function PUT(request: Request) {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') {
    return NextResponse.json({ error: 'Нет доступа. Войдите в админку.' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body?.profile) {
    return NextResponse.json({ error: 'Нет данных для сохранения.' }, { status: 400 });
  }

  const profile = mergeBrandProfile(body.profile);
  const supabase = createServerSupabaseClient();

  if (!supabase) {
    return NextResponse.json(
      {
        error: 'Supabase не подключён. Для сохранения на домене добавьте NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY и SUPABASE_SERVICE_ROLE_KEY.',
        profile,
      },
      { status: 503 },
    );
  }

  const { error } = await supabase.from('trainer_brand').upsert({
    key: BRAND_KEY,
    profile,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    console.error('[brand] Supabase save error:', error.message);
    return NextResponse.json({ error: error.message, profile }, { status: 500 });
  }

  return NextResponse.json({ ok: true, source: 'supabase', profile });
}
