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
      <body className="flex h-screen overflow-hidden bg-[#F5F6FA]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto ml-60">
          {children}
        </main>
      </body>
    </html>
  );
}
