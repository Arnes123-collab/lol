import Link from 'next/link';
import ClientReportForm from '@/components/reports/ClientReportForm';

export const revalidate = 0;

export default function NewTrainingReportPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary p-4 md:p-8 font-body">
      <main className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-accent-gold text-xs hover:underline">← На главную</Link>
          <h1 className="text-3xl md:text-5xl font-display uppercase text-accent-gold mt-3">Отчёт после тренировки</h1>
          <p className="text-text-muted text-sm mt-3 max-w-2xl">Заполните форму после занятия: выполнение, рабочие веса, самочувствие, боль и комментарий для тренера.</p>
        </div>
        <ClientReportForm />
      </main>
    </div>
  );
}
