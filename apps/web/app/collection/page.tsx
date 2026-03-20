import { MINIATURES } from '@/lib/mock-data';
import { MiniatureCard } from '@/components/miniature-card/miniature-card';
import { Fab } from '@/components/fab/fab';

export default function CollectionPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A2E]">Collection</h1>
          <p className="text-sm text-[#888888]">{MINIATURES.length} miniatures total</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#6C63FF] text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
            </svg>
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#EFEFEF] bg-white text-[#888888] hover:text-[#1A1A2E] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="8" y1="6" x2="21" y2="6"/>
              <line x1="8" y1="12" x2="21" y2="12"/>
              <line x1="8" y1="18" x2="21" y2="18"/>
              <line x1="3" y1="6" x2="3.01" y2="6"/>
              <line x1="3" y1="12" x2="3.01" y2="12"/>
              <line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Search miniatures..."
            className="w-full pl-9 pr-4 py-2 border border-[#EFEFEF] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            readOnly
          />
        </div>
        <select className="px-3 py-2 border border-[#EFEFEF] rounded-lg text-sm bg-white text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#6C63FF] cursor-pointer">
          <option value="">All Statuses</option>
          <option value="backlog">Backlog</option>
          <option value="unpainted">Unpainted</option>
          <option value="primed">Primed</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <select className="px-3 py-2 border border-[#EFEFEF] rounded-lg text-sm bg-white text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#6C63FF] cursor-pointer">
          <option value="">All Types</option>
          <option value="Infantry">Infantry</option>
          <option value="Cavalry">Cavalry</option>
          <option value="Monster">Monster</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Character">Character</option>
          <option value="Terrain">Terrain</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {MINIATURES.map((mini) => (
          <MiniatureCard key={mini.id} mini={mini} />
        ))}
      </div>
      <Fab href="/add" />
    </div>
  );
}
