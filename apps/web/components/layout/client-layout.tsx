'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from './sidebar';

const AUTH_ROUTES = ['/login', '/signup'];

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  if (isAuthRoute) {
    return <main className="h-full overflow-y-auto">{children}</main>;
  }

  return (
    <>
      <Sidebar />
      <main className="h-full overflow-y-auto pt-14">{children}</main>
    </>
  );
}
