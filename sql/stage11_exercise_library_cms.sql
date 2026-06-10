-- Stage 11 - Exercise Library CMS
-- Supabase-ready schema for a professional exercise database.

create extension if not exists "pgcrypto";

create table if not exists exercise_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  sort_order integer not null default 100,
  created_at timestamptz not null default now()
);

create table if not exists exercise_subcategories (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references exercise_categories(id) on delete cascade,
  name text not null,
  sort_order integer not null default 100,
  created_at timestamptz not null default now(),
  unique(category_id, name)
);

create table if not exists exercises (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  category_id uuid references exercise_categories(id) on delete set null,
  subcategory_id uuid references exercise_subcategories(id) on delete set null,
  exercise_type text not null check (exercise_type in ('Базовое', 'Подсобное', 'Реабилитация', 'Кардио')),
  primary_muscle text not null,
  secondary_muscles text[] not null default '{}',
  equipment text[] not null default '{}',
  difficulty_level text not null check (difficulty_level in ('Новичок', 'Средний', 'Продвинутый', 'Элитный')),
  sport_tags text[] not null default '{}',
  image_url text,
  gif_url text,
  video_url text,
  description text,
  common_mistakes text,
  coach_notes text,
  replacement_exercise_ids uuid[] not null default '{}',
  default_sets text not null default '3',
  default_reps text not null default '8',
  default_rest text not null default '90 сек',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists exercises_category_idx on exercises(category_id);
create index if not exists exercises_subcategory_idx on exercises(subcategory_id);
create index if not exists exercises_active_idx on exercises(is_active);
create index if not exists exercises_sport_tags_idx on exercises using gin(sport_tags);
create index if not exists exercises_equipment_idx on exercises using gin(equipment);
create index if not exists exercises_name_search_idx on exercises using gin(to_tsvector('simple', name || ' ' || coalesce(description, '')));
