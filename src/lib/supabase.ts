import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl) && Boolean(supabaseAnonKey);

class DemoSupabaseQuery {
  private result: { data: any; error: null; count: number };

  constructor(data: any = []) {
    this.result = { data, error: null, count: Array.isArray(data) ? data.length : 0 };
  }

  select() { return this; }
  insert() { return new DemoSupabaseQuery({ id: 'demo-id' }); }
  update() { return this; }
  delete() { return this; }
  order() { return this; }
  eq() { return this; }
  single() { return new DemoSupabaseQuery({ id: 'demo-id' }); }
  then(resolve: (value: any) => void) { return Promise.resolve(this.result).then(resolve); }
}

const demoSupabase = {
  from() {
    return new DemoSupabaseQuery([]);
  },
};

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, { auth: { persistSession: false } })
  : (demoSupabase as any);
