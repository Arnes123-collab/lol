import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import TestimonialsManager from '@/components/admin/testimonials/TestimonialsManager';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function TestimonialsPage() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');
  return <TestimonialsManager />;
}
