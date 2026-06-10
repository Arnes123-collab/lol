import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export default async function PlansPage() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');

  const { data: plans } = await supabase
    .from('training_plans')
    .select('*, client:clients(name)')
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary p-8 font-body">
      <div className="max-w-4xl mx-auto">
        <Link href="/admin" className="text-accent-gold text-xs hover:underline mb-4 inline-block">← Назад в меню</Link>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-display text-accent-gold uppercase">Тренировочные планы</h1>
          <Link href="/admin/plans/new" className="bg-accent-gold text-white px-6 py-2 font-bold uppercase text-sm rounded hover:bg-accent-gold-light transition-colors">
            + Создать план
          </Link>
        </div>

        <div className="grid gap-4">
          {plans && plans.length > 0 ? (
            plans.map((plan: any) => (
              <Link key={plan.id} href={`/admin/plans/${plan.id}`} className="bg-bg-card p-6 rounded border border-border-default flex justify-between items-center hover:border-accent-gold transition-all shadow-lg">
                <div>
                  <h2 className="text-lg font-bold">{plan.title}</h2>
                  <p className="text-text-muted text-sm mt-1">{plan.client?.name || 'Клиент удален'}</p>
                </div>
                <div className="flex gap-4 text-sm"><span className="text-accent-gold font-bold">Редактировать →</span><span className="text-green-400 font-bold">PDF/WhatsApp</span></div>
              </Link>
            ))
          ) : (
            <p className="text-text-muted text-center py-10">Пока нет созданных планов.</p>
          )}
        </div>
      </div>
    </div>
  );
}
