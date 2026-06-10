create extension if not exists pgcrypto;

create table if not exists clients (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  age integer,
  weight numeric,
  height numeric,
  goal text not null,
  experience text,
  injuries text,
  training_place text,
  training_days text,
  whatsapp text,
  instagram text,
  status text default 'new' check (status in ('new','active','paused','finished')),
  created_at timestamptz default now()
);

create table if not exists exercises (
  id uuid default gen_random_uuid() primary key,
  name text not null unique,
  category text,
  description text,
  created_at timestamptz default now()
);

create table if not exists training_plans (
  id uuid default gen_random_uuid() primary key,
  client_id uuid references clients(id) on delete cascade,
  title text not null,
  goal text,
  start_date date,
  end_date date,
  status text default 'draft' check (status in ('draft','active','completed','archived')),
  created_at timestamptz default now()
);

create table if not exists training_plan_items (
  id uuid default gen_random_uuid() primary key,
  training_plan_id uuid references training_plans(id) on delete cascade not null,
  exercise_id uuid references exercises(id),
  training_day text not null,
  exercise_order integer default 1,
  sets integer,
  reps text,
  weight numeric,
  percent numeric,
  rest_time text,
  tempo text,
  comment text,
  created_at timestamptz default now()
);

create index if not exists idx_clients_created_at on clients(created_at desc);
create index if not exists idx_training_plans_client_id on training_plans(client_id);
create index if not exists idx_training_items_plan_day_order on training_plan_items(training_plan_id, training_day, exercise_order);

insert into exercises (name, category, description) values
('Жим лёжа классический','Жим','Основное соревновательное движение'),
('Жим лёжа с паузой 2 сек','Жим','Контроль старта и фиксации'),
('Жим средним хватом','Жим','Баланс грудных, плеч и трицепса'),
('Жим узким хватом','Жим','Акцент на трицепс'),
('Споттер-жим 65%','Жим','Контроль траектории со страховкой'),
('Кластерный жим 2+2','Жим','Разделение подхода короткой паузой'),
('Жим с доски 5 см','Жим','Дожим и слабая зона'),
('Жим с доски 10 см','Жим','Дожим средняя амплитуда'),
('Жим с доски 15 см','Жим','Тяжелый дожим'),
('Жим под углом 55%','Жим','Верх груди и плечевой пояс'),
('Жим сидя 2×15','Плечи','Профилактика плечевого пояса'),
('Face Pull','Плечи','Задняя дельта и лопатки'),
('Тяга штанги в наклоне','Спина','Баланс жима и тяги'),
('Фронтальный присед','Ноги','Силовая база'),
('Trap Bar Deadlift','Тяга','Силовая тяга с меньшей нагрузкой на поясницу')
on conflict (name) do update set category = excluded.category, description = excluded.description;

-- STAGE 7: payments and client statuses
create table if not exists client_payments (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id) on delete cascade,
  tariff text not null check (tariff in ('free_week', 'basic_2_weeks', 'premium_month')),
  tariff_name text not null,
  amount integer not null default 0,
  currency text not null default 'KZT',
  paid boolean not null default false,
  payment_date date,
  start_date date not null,
  end_date date not null,
  pause_until date,
  source text check (source in ('kaspi', 'cash', 'bank_transfer', 'other')),
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists client_payments_client_id_idx on client_payments(client_id);
create index if not exists client_payments_end_date_idx on client_payments(end_date);
create index if not exists client_payments_paid_idx on client_payments(paid);
