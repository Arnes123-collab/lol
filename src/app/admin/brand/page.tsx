import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import BrandManager from '@/components/admin/brand/BrandManager';

export const dynamic = 'force-dynamic';

export default async function AdminBrandPage() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');
  return <BrandManager />;
}
