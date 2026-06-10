import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data, error } = await supabase
    .from('training_plan_items')
    .select('*, exercise:exercises(*)')
    .eq('training_plan_id', id)
    .order('training_day', { ascending: true })
    .order('exercise_order', { ascending: true });

  if (error) return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  return NextResponse.json({ data, error: null });
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const payload = {
    training_plan_id: id,
    training_day: String(body.training_day || ''),
    exercise_id: body.exercise_id || null,
    exercise_order: Number(body.exercise_order || 1),
    sets: body.sets ? Number(body.sets) : null,
    reps: body.reps ? String(body.reps) : null,
    weight: body.weight ? Number(body.weight) : null,
    percent: body.percent ? Number(body.percent) : null,
    rest_time: body.rest_time ? String(body.rest_time) : null,
    tempo: body.tempo ? String(body.tempo) : null,
    comment: body.comment ? String(body.comment) : null,
  };

  if (!payload.training_day || !payload.exercise_id) {
    return NextResponse.json({ data: null, error: 'День и упражнение обязательны' }, { status: 400 });
  }

  const { data, error } = await supabase.from('training_plan_items').insert([payload]).select().single();
  if (error) return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  return NextResponse.json({ data, error: null });
}
