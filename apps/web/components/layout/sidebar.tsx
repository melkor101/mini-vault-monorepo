'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/dashboard', icon: '🏠', label: 'Dashboard' },
  { href: '/collection', icon: '📚', label: 'Collection' },
  { href: '/add', icon: '➕', label: 'Add' },
  { href: '/boxes', icon: '📦', label: 'Boxes' },
  { href: '/rewards', icon: '🏆', label: 'Rewards' },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard';
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-60 border-r border-[#EFEFEF] bg-white flex flex-col h-screen fixed left-0 top-0">
      <div className="p-6 border-b border-[#EFEFEF]">
        <h1 className="text-xl font-bold text-[#1A1A2E]">Mini Vault</h1>
        <p className="text-sm text-[#888888]">Collection Tracker</p>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-[#6C63FF] text-white'
                    : 'text-[#1A1A2E] hover:bg-[#F5F6FA]'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
