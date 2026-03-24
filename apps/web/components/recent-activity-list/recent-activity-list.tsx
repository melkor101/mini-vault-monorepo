import Link from 'next/link';
import type { Miniature } from '@/lib/types';
import { StatusPill } from '@/components/status-pill/status-pill';

export function RecentActivityList({ miniatures }: { miniatures: Miniature[] }) {
  const recent = [...miniatures].sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated)).slice(0, 4);

  return (
    <div className="space-y-2">
      {recent.map((mini) => (
        <Link
          key={mini.id}
          href={`/collection/${mini.id}`}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F6FA] transition-colors"
        >
          <div
            className="w-10 h-10 rounded-lg flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${mini.thumbnailColors[0]}, ${mini.thumbnailColors[1] ?? mini.thumbnailColors[0]})` }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#1A1A2E] truncate">{mini.name}</p>
            <p className="text-xs text-[#888888]">{mini.brand} · {mini.lastUpdated}</p>
          </div>
          <StatusPill status={mini.status} />
        </Link>
      ))}
    </div>
  );
}
