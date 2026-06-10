import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import SiteSettingsManager from '@/components/admin/site-settings/SiteSettingsManager';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function SiteSettingsPage() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');
  return <SiteSettingsManager />;
}
