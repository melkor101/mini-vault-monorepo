interface WeeklyStatCardProps {
  icon: string;
  title: string;
  count: number;
  subtitle: string;
  gradient: [string, string];
}

export function WeeklyStatCard({ icon, title, count, subtitle, gradient }: WeeklyStatCardProps) {
  return (
    <div
      className="rounded-xl p-4 text-white"
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      <p className="text-xl mb-1">{icon}</p>
      <p className="text-xs font-medium opacity-80 mb-1">{title}</p>
      <p className="text-2xl font-bold">{count}</p>
      <p className="text-xs opacity-80 mt-1">{subtitle}</p>
    </div>
  );
}
