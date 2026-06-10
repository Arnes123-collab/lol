import PlanExportView from '@/components/plans/PlanExportView';
import { demoPlanData } from '@/lib/demoPlanData';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function PlanViewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const plan = { ...demoPlanData, id };
  return <PlanExportView plan={plan} />;
}
