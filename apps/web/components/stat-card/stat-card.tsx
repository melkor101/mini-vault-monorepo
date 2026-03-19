interface StatCardProps {
  title: string;
  count: number;
  percentage?: number;
  gradient: [string, string];
}

export function StatCard({ title, count, percentage, gradient }: StatCardProps) {
  return (
    <div
      className="rounded-xl p-4 text-white flex-1 flex flex-col justify-center"
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium opacity-80 mb-1">{title}</p>
          {percentage !== undefined && (
            <p className="text-xs opacity-80">{percentage}% of total</p>
          )}
        </div>
        <p className="text-3xl font-bold">{count}</p>
      </div>
    </div>
  );
}
