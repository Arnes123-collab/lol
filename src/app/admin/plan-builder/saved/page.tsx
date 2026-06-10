import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import SavedPlans from '@/components/admin/SavedPlans';

export const dynamic = 'force-dynamic';

export default async function SavedPlansPage() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');
  return <SavedPlans />;
}
