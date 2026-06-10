import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Client } from '@/types/client';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminClientsPage() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');

  const { data, error } = await supabase.from('clients').select('*').order('created_at', { ascending: false });

  if (error) {
    return <div className="p-8 text-accent-red">Ошибка: {error.message}</div>;
  }

  const clients = data as Client[];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary p-4 md:p-8 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link href="/admin" className="text-accent-gold text-xs">← Назад</Link>
          <h1 className="text-2xl font-display uppercase mt-1">Список заявок</h1>
        </div>
        {!clients || clients.length === 0 ? (
          <p>Заявок пока нет</p>
        ) : (
          <div className="w-full overflow-x-auto bg-bg-card border border-border-default rounded-lg">
            <table className="w-full text-left border-collapse min-w-[1300px] text-xs">
              <thead>
                <tr className="bg-bg-secondary border-b border-border-default text-text-muted uppercase text-[10px]">
                  <th className="p-4">Дата</th><th className="p-4">Статус</th><th className="p-4">Имя</th>
                  <th className="p-4">Возраст</th><th className="p-4">Вес/Рост</th><th className="p-4">Цель</th>
                  <th className="p-4">Опыт</th><th className="p-4">Травмы</th><th className="p-4">Где</th>
                  <th className="p-4">Дней</th><th className="p-4">Контакты</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-default">
                {clients.map((client) => (
                  <tr key={client.id} className="hover:bg-bg-secondary/30">
                    <td className="p-4 text-text-muted">{new Date(client.created_at).toLocaleDateString('ru-RU')}</td>
                    <td className="p-4"><span className="px-2 py-0.5 bg-accent-gold text-white rounded font-bold">{client.status}</span></td>
                    <td className="p-4 font-bold">{client.name}</td>
                    <td className="p-4">{client.age || '—'}</td>
                    <td className="p-4">{client.weight || '—'}/{client.height || '—'}</td>
                    <td className="p-4 truncate max-w-xs">{client.goal}</td>
                    <td className="p-4 truncate max-w-xs">{client.experience || '—'}</td>
                    <td className="p-4 text-accent-red-light">{client.injuries || 'Нет'}</td>
                    <td className="p-4">{client.training_place || '—'}</td>
                    <td className="p-4">{client.training_days || '—'}</td>
                    <td className="p-4">
                      {client.whatsapp && <div>WA: {client.whatsapp}</div>}
                      {client.instagram && <div>IG: {client.instagram}</div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}