-- Этап 8: таблицы для отчётов клиентов после тренировки
-- Можно выполнить в Supabase SQL Editor, когда будете подключать реальные данные.

create table if not exists public.training_reports (
  id uuid primary key default gen_random_uuid(),
  client_id uuid null references public.clients(id) on delete set null,
  client_name text not null,
  whatsapp text,
  training_date date not null,
  plan_title text,
  training_day text,
  status text not null check (status in ('completed', 'partial', 'not_completed')),
  bodyweight numeric,
  mood integer not null check (mood between 0 and 10),
  energy integer not null check (energy between 0 and 10),
  pain_level integer not null check (pain_level between 0 and 10),
  pain_zone text not null default 'none',
  client_comment text,
  coach_question text,
  video_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.training_report_sets (
  id uuid primary key default gen_random_uuid(),
  report_id uuid not null references public.training_reports(id) on delete cascade,
  exercise_name text not null,
  weight text,
  sets text,
  reps text,
  rpe text,
  created_at timestamptz not null default now()
);

create index if not exists training_reports_client_name_idx on public.training_reports(client_name);
create index if not exists training_reports_training_date_idx on public.training_reports(training_date desc);
create index if not exists training_reports_pain_level_idx on public.training_reports(pain_level desc);
