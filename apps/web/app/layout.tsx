import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/layout/sidebar';

export const metadata: Metadata = {
  title: 'Mini Vault',
  description: 'Miniature painting collection tracker',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden bg-[#F5F6FA]">
        <Sidebar />
        <main className="h-full overflow-y-auto pt-14">
          {children}
        </main>
      </body>
    </html>
  );
}
