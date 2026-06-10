import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
async function createPlan(formData: FormData) {
  'use server';
  const payload = {
    title: String(formData.get('title') || '').trim(),
    client_id: String(formData.get('client_id') || ''),
    goal: String(formData.get('goal') || '').trim() || null,
    start_date: String(formData.get('start_date') || '') || null,
    end_date: String(formData.get('end_date') || '') || null,
    status: 'draft',
  };

  const { data, error } = await supabase.from('training_plans').insert([payload]).select().single();
  if (error) throw error;
  redirect(`/admin/plans/${data.id}`);
}

export default async function NewPlanPage() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');

  const { data: clients } = await supabase.from('clients').select('id, name').order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary p-8 font-body">
      <div className="max-w-2xl mx-auto bg-bg-card p-8 rounded border border-border-default">
        <Link href="/admin/plans" className="text-accent-gold text-xs">← Назад к планам</Link>
        <h1 className="text-2xl font-display text-accent-gold uppercase mb-6 mt-3">Новый план</h1>
        <form action={createPlan} className="space-y-4">
          <div>
            <label className="block text-text-muted text-xs uppercase mb-1">Клиент</label>
            <select name="client_id" required className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm">
              <option value="">Выберите клиента...</option>
              {clients?.map((c: { id: string; name: string }) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-text-muted text-xs uppercase mb-1">Название плана</label>
            <input type="text" name="title" required placeholder="Например: 16 недель - жим волной" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
          </div>
          <div>
            <label className="block text-text-muted text-xs uppercase mb-1">Цель плана</label>
            <textarea name="goal" rows={3} placeholder="МСМК, здоровье плеч, пик силы..." className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="date" name="start_date" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
            <input type="date" name="end_date" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
          </div>
          <button type="submit" className="w-full bg-accent-gold text-white font-bold py-3 uppercase text-sm rounded mt-4">Создать и перейти к упражнениям</button>
        </form>
      </div>
    </div>
  );
}
