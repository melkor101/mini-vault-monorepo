import Link from 'next/link';
import { BOXES, LOCATIONS, MINIATURES } from '@/lib/mock-data';

export default function BoxesPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Boxes</h1>
        <p className="text-sm text-[#888888]">{BOXES.length} storage boxes</p>
      </div>

      <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-wide mb-3">Locations</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {LOCATIONS.map((loc) => {
          const boxesInLoc = BOXES.filter((b) => b.locationId === loc.id);
          return (
            <div key={loc.id} className="bg-white rounded-xl border border-[#EFEFEF] p-4">
              <p className="text-2xl mb-2">{loc.icon}</p>
              <p className="text-sm font-semibold text-[#1A1A2E]">{loc.name}</p>
              <p className="text-xs text-[#888888]">{boxesInLoc.length} boxes</p>
            </div>
          );
        })}
      </div>

      <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-wide mb-3">Unplaced Boxes</h2>
      <div className="space-y-2">
        {BOXES.filter((b) => !b.locationId).map((box) => {
          const count = MINIATURES.filter((m) => m.storageBox === box.id).length;
          return (
            <Link
              key={box.id}
              href={`/boxes/${box.id}`}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#EFEFEF] hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg flex-shrink-0" style={{ backgroundColor: box.color }} />
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#1A1A2E]">{box.name}</p>
                <p className="text-xs text-[#888888]">{count} miniatures</p>
              </div>
              <span className="text-[#888888] text-sm">→</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
