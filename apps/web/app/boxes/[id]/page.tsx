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
      <Link href="/boxes" className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#1A1A2E] mb-6">
        ← Back to Boxes
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl" style={{ backgroundColor: box.color }} />
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A2E]">{box.name}</h1>
          <p className="text-sm text-[#888888]">{miniatures.length} miniatures</p>
        </div>
      </div>

      {miniatures.length === 0 ? (
        <div className="text-center py-12 text-[#888888]">
          <p className="text-lg mb-1">Empty box</p>
          <p className="text-sm">Add miniatures to this box from the collection</p>
        </div>
      ) : (
        <div className="space-y-2">
          {miniatures.map((mini) => (
            <Link
              key={mini.id}
              href={`/collection/${mini.id}`}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#EFEFEF] hover:shadow-sm transition-shadow"
            >
              <div
                className="w-10 h-10 rounded-lg flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${mini.thumbnailColors[0]}, ${mini.thumbnailColors[1] ?? mini.thumbnailColors[0]})` }}
              />
              <div className="flex-1">
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
