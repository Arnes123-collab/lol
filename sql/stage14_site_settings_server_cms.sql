-- Stage 14 - Server CMS for domain deployment
-- Run this in Supabase SQL Editor before publishing the site to a real domain.

create table if not exists public.site_settings (
  key text primary key,
  content jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.trainer_brand (
  key text primary key,
  profile jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_settings enable row level security;
alter table public.trainer_brand enable row level security;

-- Public site can read settings.
drop policy if exists "site_settings_public_read" on public.site_settings;
create policy "site_settings_public_read"
on public.site_settings
for select
to anon, authenticated
using (true);

-- Public site can read trainer brand.
drop policy if exists "trainer_brand_public_read" on public.trainer_brand;
create policy "trainer_brand_public_read"
on public.trainer_brand
for select
to anon, authenticated
using (true);

-- Writes are performed by Next.js API route with SUPABASE_SERVICE_ROLE_KEY.
-- Do NOT create public insert/update policies for anon users.

insert into public.site_settings (key, content)
values ('main', '{}'::jsonb)
on conflict (key) do nothing;

insert into public.trainer_brand (key, profile)
values ('main', '{}'::jsonb)
on conflict (key) do nothing;
