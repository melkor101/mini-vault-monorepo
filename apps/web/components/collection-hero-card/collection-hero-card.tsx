interface CollectionHeroCardProps {
  total: number;
  completed: number;
  inProgress: number;
  primed: number;
}

export function CollectionHeroCard({ total, completed, inProgress, primed }: CollectionHeroCardProps) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div
      className="rounded-2xl p-6 text-white h-full flex flex-col justify-between"
      style={{ background: 'linear-gradient(135deg, #4B8EF0, #7B5FDC)' }}
    >
      <div>
        <p className="text-sm font-medium opacity-80 mb-2">Total Miniatures</p>
        <p className="text-6xl font-bold mb-1">{total}</p>
        <p className="text-sm opacity-80 mb-3">Progress {pct}%</p>
        <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-white rounded-full transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-[#4CAF50]" />
          <span className="text-xs font-medium">Completed {completed}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-[#4B7BEC]" />
          <span className="text-xs font-medium">In Progress {inProgress}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-[#FF9500]" />
          <span className="text-xs font-medium">Primed {primed}</span>
        </div>
      </div>
    </div>
  );
}
