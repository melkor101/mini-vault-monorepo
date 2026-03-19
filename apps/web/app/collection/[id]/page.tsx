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
      <Link href="/collection" className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#1A1A2E] mb-6">
        ← Back to Collection
      </Link>

      <div className="bg-white rounded-xl border border-[#EFEFEF] overflow-hidden">
        <div
          className="h-48 w-full"
          style={{
            background: `linear-gradient(135deg, ${mini.thumbnailColors[0]}, ${mini.thumbnailColors[1] ?? mini.thumbnailColors[0]})`,
          }}
        />
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-[#1A1A2E]">{mini.name}</h1>
              <p className="text-sm text-[#888888]">{mini.brand}</p>
            </div>
            <StatusPill status={mini.status} />
          </div>

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
