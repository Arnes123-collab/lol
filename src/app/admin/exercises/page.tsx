import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ExerciseLibraryManager from '@/components/admin/exercises/ExerciseLibraryManager';

export const dynamic = 'force-dynamic';

export default async function ExercisesPage() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');
  return <ExerciseLibraryManager />;
}
