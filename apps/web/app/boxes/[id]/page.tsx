import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BOXES, MINIATURES } from '@/lib/mock-data';
import { StatusPill } from '@/components/status-pill/status-pill';

export default async function BoxDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const box = BOXES.find((b) => b.id === id);
  if (!box) notFound();

  const miniatures = MINIATURES.filter((m) => m.storageBox === box.id);

  return (
    <div className="p-6">
      <Link href="/boxes" className="inline-flex items-center gap-1.5 text-sm text-[#888888] hover:text-[#1A1A2E] transition-colors mb-6">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Back to Boxes
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: box.color }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
            <path d="m3.3 7 8.7 5 8.7-5"/>
            <path d="M12 22V12"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A2E]">{box.name}</h1>
          <p className="text-sm text-[#888888]">{miniatures.length} miniature{miniatures.length !== 1 ? 's' : ''}</p>
        </div>
      </div>

      {miniatures.length === 0 ? (
        <div className="text-center py-12 text-[#888888]">
          <p className="text-lg mb-1">Empty box</p>
          <p className="text-sm">Add miniatures to this box from the collection</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-[#EFEFEF] overflow-hidden">
          {miniatures.map((mini, index) => (
            <Link
              key={mini.id}
              href={`/collection/${mini.id}`}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-[#F5F6FA] transition-colors ${index < miniatures.length - 1 ? 'border-b border-[#EFEFEF]' : ''}`}
            >
              <div
                className="w-10 h-10 rounded-lg flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${mini.thumbnailColors[0]}, ${mini.thumbnailColors[1] ?? mini.thumbnailColors[0]})` }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#1A1A2E]">{mini.name}</p>
                <p className="text-xs text-[#888888]">{mini.brand} · {mini.type}</p>
              </div>
              <StatusPill status={mini.status} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
