import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const required = ['name', 'age', 'weight', 'height', 'goal', 'location', 'frequency', 'whatsapp'];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: `Поле ${field} обязательно` }, { status: 400 });
      }
    }

    const payload = {
      name: String(body.name).trim(),
      age: Number(body.age),
      weight: Number(body.weight),
      height: Number(body.height),
      goal: String(body.goal).trim(),
      experience: body.experience ? String(body.experience).trim() : null,
      injuries: body.injuries ? String(body.injuries).trim() : null,
      training_place: String(body.location).trim(),
      training_days: String(body.frequency).trim(),
      whatsapp: String(body.whatsapp).trim(),
      instagram: body.instagram ? String(body.instagram).trim() : null,
      status: 'new',
    };

    const { error } = await supabase.from('clients').insert([payload]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Заявка принята', success: true }, { status: 200 });
  } catch (error) {
    console.error('Ошибка обработки заявки:', error);
    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
