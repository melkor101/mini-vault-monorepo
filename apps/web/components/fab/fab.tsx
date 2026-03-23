import Link from 'next/link';

export function Fab({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#6C63FF] text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </Link>
  );
}
