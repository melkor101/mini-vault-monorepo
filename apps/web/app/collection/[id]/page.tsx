import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MINIATURES } from '@/lib/mock-data';
import { StatusPill } from '@/components/status-pill/status-pill';

export default async function MiniatureDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const mini = MINIATURES.find((m) => m.id === id);
  if (!mini) notFound();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/collection" className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#1A1A2E] transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to Collection
        </Link>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#EFEFEF] bg-white text-sm font-medium text-[#1A1A2E] hover:bg-[#F5F6FA] transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
            Edit
          </button>
          <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-red-200 bg-white text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
              <path d="M10 11v6M14 11v6"/>
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
            </svg>
            Delete
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#EFEFEF] overflow-hidden">
        <div
          className="relative h-48 w-full flex items-end"
          style={{
            background: `linear-gradient(135deg, ${mini.thumbnailColors[0]}, ${mini.thumbnailColors[1] ?? mini.thumbnailColors[0]})`,
          }}
        >
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white">{mini.name}</h1>
            <p className="text-sm text-white/70">{mini.brand}</p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-1">
            <h2 className="text-xl font-bold text-[#1A1A2E]">{mini.name}</h2>
            <StatusPill status={mini.status} />
          </div>
          <p className="text-sm text-[#888888] mb-5">{mini.brand}</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-[#F5F6FA] rounded-lg p-3">
              <p className="text-xs text-[#888888] mb-0.5">Type</p>
              <p className="text-sm font-semibold text-[#1A1A2E]">{mini.type}</p>
            </div>
            <div className="bg-[#F5F6FA] rounded-lg p-3">
              <p className="text-xs text-[#888888] mb-0.5">Storage Box</p>
              <p className="text-sm font-semibold text-[#1A1A2E]">{mini.storageBox ?? 'Unplaced'}</p>
            </div>
            <div className="bg-[#F5F6FA] rounded-lg p-3">
              <p className="text-xs text-[#888888] mb-0.5">Last Updated</p>
              <p className="text-sm font-semibold text-[#1A1A2E]">{mini.lastUpdated}</p>
            </div>
            <div className="bg-[#F5F6FA] rounded-lg p-3">
              <p className="text-xs text-[#888888] mb-0.5">Brand</p>
              <p className="text-sm font-semibold text-[#1A1A2E]">{mini.brand}</p>
            </div>
          </div>

          {mini.notes && (
            <div className="bg-[#F5F6FA] rounded-lg p-3">
              <p className="text-xs text-[#888888] mb-0.5">Notes</p>
              <p className="text-sm text-[#1A1A2E]">{mini.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
