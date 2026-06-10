-- Stage 16 - Client Portal
-- Для локальной версии данные хранятся в браузере.
-- Для домена создайте таблицу и подключите API сохранения кабинетов клиентов.

create table if not exists client_portal_access (
  id uuid primary key default gen_random_uuid(),
  client_id uuid,
  client_name text not null,
  phone text not null,
  access_code text not null,
  tariff text,
  status text default 'active',
  start_date date,
  end_date date,
  coach_comment text,
  workouts jsonb default '[]'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists client_portal_access_phone_idx on client_portal_access(phone);
