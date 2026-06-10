const fs = require('fs');
const path = require('path');

const files = [
  { path: 'src/types/training-plan.ts', content: `import { Client } from './client';\nimport { Exercise } from './exercise';\n\nexport interface TrainingPlan {\n  id: string;\n  client_id: string;\n  title: string;\n  goal: string | null;\n  start_date: string | null;\n  end_date: string | null;\n  created_at: string;\n}\n\nexport interface TrainingPlanItem {\n  id: string;\n  training_plan_id: string;\n  exercise_id: string;\n  exercise?: Exercise;\n  training_day: string;\n  exercise_order: number;\n  sets: number | null;\n  reps: string | null;\n  weight: number | null;\n  percent: number | null;\n  rest_time: string | null;\n  tempo: string | null;\n  comment: string | null;\n  created_at: string;\n}\n\nexport interface TrainingPlanWithItems extends TrainingPlan {\n  client: Client;\n  items: TrainingPlanItem[];\n}` },
  { path: 'src/app/api/training-plans/route.ts', content: `import { supabase } from '@/lib/supabase';\nimport { NextResponse } from 'next/server';\n\nexport async function GET() {\n  const { data, error } = await supabase.from('training_plans').select('*, client:clients(name)');\n  return NextResponse.json({ data, error });\n}\n\nexport async function POST(req: Request) {\n  const body = await req.json();\n  const { data, error } = await supabase.from('training_plans').insert([body]).select();\n  return NextResponse.json({ data, error });\n}` },
  { path: 'src/app/api/training-plans/[id]/items/route.ts', content: `import { supabase } from '@/lib/supabase';\nimport { NextResponse } from 'next/server';\n\nexport async function GET(req: Request, { params }: { params: { id: string } }) {\n  const { data, error } = await supabase.from('training_plan_items').select('*, exercise:exercises(*)').eq('training_plan_id', params.id).order('training_day', { ascending: true }).order('exercise_order', { ascending: true });\n  return NextResponse.json({ data, error });\n}\n\nexport async function POST(req: Request) {\n  const body = await req.json();\n  const { data, error } = await supabase.from('training_plan_items').insert([body]);\n  return NextResponse.json({ data, error });\n}` },
  { path: 'src/app/api/training-plan-items/[itemId]/route.ts', content: `import { supabase } from '@/lib/supabase';\nimport { NextResponse } from 'next/server';\n\nexport async function DELETE(req: Request, { params }: { params: { itemId: string } }) {\n  const { error } = await supabase.from('training_plan_items').delete().eq('id', params.itemId);\n  return NextResponse.json({ success: !error, error });\n}` }
];

files.forEach(file => {
  const dir = path.dirname(file.path);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file.path, file.content);
  console.log(`Создан файл: ${file.path}`);
});

console.log('Все API-файлы и типы созданы!');