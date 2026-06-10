-- Stage 13 - Site Content CMS
-- Optional Supabase table for production persistence.
-- Local version stores settings in browser localStorage for immediate demo editing.

CREATE TABLE IF NOT EXISTS site_settings (
  id TEXT PRIMARY KEY DEFAULT 'main',
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO site_settings (id, content)
VALUES ('main', '{}'::jsonb)
ON CONFLICT (id) DO NOTHING;
