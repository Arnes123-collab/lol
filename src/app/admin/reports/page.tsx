import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import ReportsDashboard from '@/components/reports/ReportsDashboard';
import { demoTrainingReports } from '@/lib/demoReports';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminReportsPage() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary p-4 md:p-8 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/admin" className="text-accent-gold text-xs hover:underline">← Назад в админку</Link>
            <h1 className="text-3xl font-display uppercase text-accent-gold mt-2">Отчёты клиентов</h1>
            <p className="text-text-muted text-sm mt-2 max-w-2xl">Здесь тренер видит выполнение тренировки, рабочие веса, самочувствие, боль, комментарии и ссылку на видео техники.</p>
          </div>
          <Link href="/reports/new" className="no-print rounded-lg bg-accent-gold px-5 py-3 text-sm font-bold uppercase text-white">Форма для клиента</Link>
        </div>
        <ReportsDashboard demoReports={demoTrainingReports} />
      </div>
    </div>
  );
}
