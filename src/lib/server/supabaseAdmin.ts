import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const isSupabaseServerConfigured = Boolean(supabaseUrl) && Boolean(serviceRoleKey || anonKey);
export const isSupabaseServiceRoleConfigured = Boolean(supabaseUrl) && Boolean(serviceRoleKey);

export function createServerSupabaseClient() {
  if (!isSupabaseServerConfigured) return null;

  return createClient(supabaseUrl, serviceRoleKey || anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
