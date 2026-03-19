interface CollectionHeroCardProps {
  total: number;
  painted: number;
  inProgress: number;
}

export function CollectionHeroCard({ total, painted, inProgress }: CollectionHeroCardProps) {
  const pct = total > 0 ? Math.round((painted / total) * 100) : 0;

  return (
    <div
      className="rounded-2xl p-6 text-white h-full flex flex-col justify-between"
      style={{ background: 'linear-gradient(135deg, #4B8EF0, #7B5FDC)' }}
    >
      <h2 className="text-sm font-medium opacity-80 mb-1">My Collection</h2>
      <p className="text-4xl font-bold mb-4">{total} <span className="text-lg font-normal opacity-80">miniatures</span></p>
      <div className="flex gap-6 mb-4">
        <div>
          <p className="text-2xl font-bold">{painted}</p>
          <p className="text-xs opacity-80">Completed</p>
        </div>
        <div>
          <p className="text-2xl font-bold">{inProgress}</p>
          <p className="text-xs opacity-80">In Progress</p>
        </div>
        <div>
          <p className="text-2xl font-bold">{pct}%</p>
          <p className="text-xs opacity-80">Painted</p>
        </div>
      </div>
      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
