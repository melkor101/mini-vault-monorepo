import Link from 'next/link';
import type { Miniature } from '@/lib/types';
import { StatusPill } from '@/components/status-pill/status-pill';

export function MiniatureCard({ mini }: { mini: Miniature }) {
  return (
    <Link href={`/collection/${mini.id}`} className="block">
      <div className="bg-white rounded-xl border border-[#EFEFEF] overflow-hidden hover:shadow-md transition-shadow">
        <div
          className="h-32 w-full"
          style={{
            background: `linear-gradient(135deg, ${mini.thumbnailColors[0]}, ${mini.thumbnailColors[1] ?? mini.thumbnailColors[0]})`,
          }}
        >
          <div className="flex justify-end p-2">
            <span
              className="w-4 h-4 rounded-full border-2 border-white"
              style={{ backgroundColor: mini.badgeColor }}
            />
          </div>
        </div>
        <div className="p-3">
          <p className="text-sm font-semibold text-[#1A1A2E] truncate mb-1">{mini.name}</p>
          <p className="text-xs text-[#888888] mb-2">{mini.brand} · {mini.type}</p>
          <StatusPill status={mini.status} />
        </div>
      </div>
    </Link>
  );
}
