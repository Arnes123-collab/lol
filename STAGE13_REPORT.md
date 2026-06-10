# Stage 13 - Site Content CMS

Added admin route:

- `/admin/site-settings`

Purpose:

- edit public site content without touching code;
- save phone, WhatsApp, Instagram, trainer name, experience, hero text, biography, contacts text and tariffs;
- changes are stored in browser localStorage for local demo mode;
- public pages read the saved settings and update after refresh.

Updated public sections:

- Navbar brand
- Hero
- About section
- Pricing
- Application form WhatsApp link
- Footer contacts
- About trainer page

Important:

This local ZIP version stores settings inside the browser. For production with several devices, connect `/admin/site-settings` to Supabase table `site_settings` using `sql/stage13_site_content_cms.sql`.

Admin path:

`http://localhost:3000/admin/site-settings`

Password:

`admin123`
