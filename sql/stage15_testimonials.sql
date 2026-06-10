create table if not exists client_testimonials (
  key text primary key default 'main',
  content jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table client_testimonials enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'client_testimonials'
      and policyname = 'Public can read testimonials'
  ) then
    create policy "Public can read testimonials"
    on client_testimonials for select using (true);
  end if;
end $$;
