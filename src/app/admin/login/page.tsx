import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface LoginPageProps {
  searchParams?: Promise<{ error?: string; config?: string; next?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const resolvedSearchParams = await searchParams;
  const session = (await cookies()).get('admin_session');
  if (session?.value === 'true') redirect('/admin');

  async function handleLogin(formData: FormData) {
    'use server';
    const password = String(formData.get('password') || '');
    const adminPassword = process.env.ADMIN_PASSWORD;
    const allowDemoPassword = process.env.NODE_ENV !== 'production';
    const validPassword = adminPassword || (allowDemoPassword ? 'admin123' : '');

    if (!validPassword) redirect('/admin/login?config=1');

    if (password === validPassword) {
      const cookieStore = await cookies();
      cookieStore.set('admin_session', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      });
      const nextPath = String(formData.get('next') || '/admin');
      redirect(nextPath.startsWith('/admin') ? nextPath : '/admin');
    }
    redirect('/admin/login?error=1');
  }

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4 font-body text-text-primary">
      <div className="max-w-md w-full bg-bg-card border border-border-default p-8 rounded-lg shadow-2xl">
        <h1 className="text-2xl font-display text-accent-gold uppercase text-center mb-2 tracking-wide">Вход в панель</h1>
        <p className="text-center text-text-muted text-xs mb-6">В продакшене обязательно задайте ADMIN_PASSWORD. Демо-пароль admin123 работает только локально.</p>
        <form action={handleLogin} className="space-y-4">
          <input type="hidden" name="next" value={resolvedSearchParams?.next || '/admin'} />
          <input type="password" name="password" placeholder="Введите пароль тренера" required className="w-full p-3 bg-bg-primary text-text-primary border border-border-default focus:border-accent-gold outline-none rounded" />
          {resolvedSearchParams?.error && <p className="text-accent-red text-xs font-semibold">Неверный пароль!</p>}
          {resolvedSearchParams?.config && <p className="text-accent-red text-xs font-semibold">ADMIN_PASSWORD не задан. В production вход заблокирован до настройки пароля.</p>}
          <button type="submit" className="w-full py-3 bg-accent-gold text-white font-bold uppercase hover:bg-accent-gold-light transition-colors rounded text-sm">Войти</button>
        </form>
      </div>
    </div>
  );
}
