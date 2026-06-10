-- Stage16 Patch: Supabase Storage для медиа упражнений
-- Выполнять в Supabase SQL Editor после создания проекта.

insert into storage.buckets (id, name, public)
values ('exercise-media', 'exercise-media', true)
on conflict (id) do nothing;

alter table if exists exercises
  add column if not exists image_url text,
  add column if not exists gif_url text,
  add column if not exists video_url text;

-- Для боевого режима настройте RLS policy под администратора.
