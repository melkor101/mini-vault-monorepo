interface DonutSegment {
  color: string;
  value: number;
  label: string;
}

interface StatusDonutProps {
  segments: DonutSegment[];
}

export function StatusDonut({ segments }: StatusDonutProps) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const r = 40;
  const circumference = 2 * Math.PI * r;
  const cx = 56;
  const cy = 56;

  let offset = 0;
  const arcs = segments.map((seg) => {
    const arc = total > 0 ? (seg.value / total) * circumference : 0;
    const dasharray = `${arc} ${circumference - arc}`;
    const dashoffset = -offset;
    offset += arc;
    return { ...seg, dasharray, dashoffset };
  });

  return (
    <div className="flex items-center gap-4">
      <svg width="112" height="112" className="-rotate-90">
        {total === 0 ? (
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#EFEFEF" strokeWidth="16" />
        ) : (
          arcs.map((arc, i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={arc.color}
              strokeWidth="16"
              strokeDasharray={arc.dasharray}
              strokeDashoffset={arc.dashoffset}
            />
          ))
        )}
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          transform={`rotate(90, ${cx}, ${cy})`}
          style={{ fontSize: '18px', fontWeight: 'bold', fill: '#1A1A2E' }}
        >
          {total}
        </text>
      </svg>
      <div className="space-y-1.5">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2 text-xs">
            <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
            <span className="text-[#888888]">{seg.label}</span>
            <span className="font-semibold text-[#1A1A2E] ml-auto pl-2">{seg.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
