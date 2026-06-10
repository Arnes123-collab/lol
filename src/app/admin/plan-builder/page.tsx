import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import PlanBuilder from '@/components/admin/PlanBuilder';

export const dynamic = 'force-dynamic';

export default async function PlanBuilderPage() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');
  return <PlanBuilder />;
}
