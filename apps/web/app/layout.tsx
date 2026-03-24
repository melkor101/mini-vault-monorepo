import type { Metadata } from 'next';
import './globals.css';
import { ClientLayout } from '@/components/layout/client-layout';

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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
