import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase
    .from('training_plans')
    .select('*, client:clients(name)')
    .order('created_at', { ascending: false });
  if (error) return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  return NextResponse.json({ data, error: null });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { data, error } = await supabase.from('training_plans').insert([body]).select().single();
  if (error) return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  return NextResponse.json({ data, error: null });
}
