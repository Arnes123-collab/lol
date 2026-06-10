-- Stage 12 - Trainer Brand / Media CMS
-- Run in Supabase SQL editor when moving from local demo storage to production storage.

create table if not exists trainer_brand_profile (
  id uuid primary key default gen_random_uuid(),
  coach_name text not null default 'Агашка',
  role text not null default 'Тренер по жиму лёжа и силовой подготовке',
  experience text not null default '30+ лет опыта',
  bio text,
  achievements text[] default '{}',
  certificates text[] default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists trainer_brand_assets (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references trainer_brand_profile(id) on delete cascade,
  asset_key text not null,
  label text not null,
  description text,
  image_url text,
  video_url text,
  media_type text default 'image',
  sort_order integer default 0,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Recommended Supabase Storage bucket:
-- trainer-brand-media
-- Allowed formats: jpg, png, webp. Max upload size: 10 MB.
