import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED_API_PREFIXES = [
  '/api/training-plans',
  '/api/training-plan-items',
  '/api/exercises',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminPage = pathname.startsWith('/admin') && pathname !== '/admin/login';
  const isProtectedApi = PROTECTED_API_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (!isAdminPage && !isProtectedApi) return NextResponse.next();

  const hasSession = request.cookies.get('admin_session')?.value === 'true';
  if (hasSession) return NextResponse.next();

  if (isProtectedApi) {
    return NextResponse.json({ success: false, error: 'Необходим вход администратора' }, { status: 401 });
  }

  const loginUrl = new URL('/admin/login', request.url);
  loginUrl.searchParams.set('next', pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
};
