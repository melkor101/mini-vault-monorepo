import Link from 'next/link';
import { BOXES, LOCATIONS, MINIATURES } from '@/lib/mock-data';

export default function BoxesPage() {
  const unplacedBoxes = BOXES.filter((b) => !b.locationId);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Boxes</h1>
        <p className="text-sm text-[#888888]">{BOXES.length} storage boxes</p>
      </div>

      <h2 className="text-xs font-semibold text-[#888888] uppercase tracking-wide mb-3">Locations</h2>
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

      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold text-[#888888] uppercase tracking-wide">Unplaced Boxes</h2>
        <button className="flex items-center gap-1 text-sm font-medium text-[#6C63FF] hover:opacity-80 transition-opacity">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Add Box
        </button>
      </div>

      <div className="bg-white rounded-xl border border-[#EFEFEF] overflow-hidden">
        {unplacedBoxes.map((box, index) => {
          const count = MINIATURES.filter((m) => m.storageBox === box.id).length;
          return (
            <Link
              key={box.id}
              href={`/boxes/${box.id}`}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-[#F5F6FA] transition-colors ${index < unplacedBoxes.length - 1 ? 'border-b border-[#EFEFEF]' : ''}`}
            >
              <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: box.color }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                  <path d="m3.3 7 8.7 5 8.7-5"/>
                  <path d="M12 22V12"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#1A1A2E]">{box.name}</p>
                <p className="text-xs text-[#888888]">{count} miniature{count !== 1 ? 's' : ''}</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
