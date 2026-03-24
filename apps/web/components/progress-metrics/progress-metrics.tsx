interface MetricRow {
  label: string;
  value: number;
  total: number;
  color: string;
}

export function ProgressMetrics({ metrics }: { metrics: MetricRow[] }) {
  return (
    <div className="space-y-3">
      {metrics.map((m) => {
        const pct = m.total > 0 ? Math.round((m.value / m.total) * 100) : 0;
        return (
          <div key={m.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-[#888888]">{m.label}</span>
              <span className="font-semibold text-[#1A1A2E]">{m.value}/{m.total}</span>
            </div>
            <div className="h-2 bg-[#EFEFEF] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${pct}%`, backgroundColor: m.color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
