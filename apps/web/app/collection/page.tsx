import { MINIATURES } from '@/lib/mock-data';
import { MiniatureCard } from '@/components/miniature-card/miniature-card';

export default function CollectionPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Collection</h1>
        <p className="text-sm text-[#888888]">{MINIATURES.length} miniatures total</p>
      </div>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Search miniatures..."
          className="flex-1 px-4 py-2 border border-[#EFEFEF] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
          readOnly
        />
        <select className="px-4 py-2 border border-[#EFEFEF] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF]">
          <option value="">All Statuses</option>
          <option value="backlog">Backlog</option>
          <option value="unpainted">Unpainted</option>
          <option value="primed">Primed</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <select className="px-4 py-2 border border-[#EFEFEF] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF]">
          <option value="">All Types</option>
          <option value="Infantry">Infantry</option>
          <option value="Cavalry">Cavalry</option>
          <option value="Monster">Monster</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Character">Character</option>
          <option value="Terrain">Terrain</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {MINIATURES.map((mini) => (
          <MiniatureCard key={mini.id} mini={mini} />
        ))}
      </div>
    </div>
  );
}
