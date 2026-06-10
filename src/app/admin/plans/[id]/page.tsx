import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import PlanEditor from '@/components/PlanEditor';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function EditPlanPage({ params }: { params: Promise<{ id: string }> }) {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');
  const { id } = await params;
  return <PlanEditor planId={id} />;
}
