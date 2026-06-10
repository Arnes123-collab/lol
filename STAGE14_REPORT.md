# Stage 14 - Server CMS for Domain

## Goal
Make site content editable after deployment to a real domain.

## Added
- `/api/site-content` - server API for reading/saving public site settings.
- `/api/brand` - server API for trainer brand profile.
- `/admin/system` - system diagnostics for Supabase, domain and environment variables.
- `sql/stage14_site_settings_server_cms.sql` - Supabase tables and RLS policies.
- Updated `/admin/site-settings` to save via server API.
- Updated `/admin/brand` to save via server API.
- Public site now reads settings from server API, with localStorage fallback for demo mode.

## Required Vercel variables
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_PASSWORD`

## Important
Local mode can still use browser storage as fallback. Real domain mode requires Supabase and Service Role Key.
