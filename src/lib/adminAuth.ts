import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function requireAdmin() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');
}

export async function isAdminSessionActive() {
  return (await cookies()).get('admin_session')?.value === 'true';
}
