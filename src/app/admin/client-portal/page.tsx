import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminClientPortalManager from '@/components/client-portal/AdminClientPortalManager';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ClientPortalAdminPage() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');

  return (
    <main className="min-h-screen bg-bg-primary p-6 text-text-primary md:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent-red">Этап 16</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">Личный кабинет клиента</h1>
          <p className="mt-3 max-w-3xl text-text-muted">Финальный модуль: тренер выдаёт клиенту телефон и код доступа, клиент видит тариф, сроки, тренировки, комментарии и может перейти к отчёту после тренировки.</p>
        </div>
        <AdminClientPortalManager />
      </div>
    </main>
  );
}
