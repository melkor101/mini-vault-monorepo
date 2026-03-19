interface PipelineProps {
  backlog: number;
  unpainted: number;
  primed: number;
  inProgress: number;
  completed: number;
  total: number;
}

export function PaintingPipeline({ backlog, unpainted, primed, inProgress, completed, total }: PipelineProps) {
  const segments = [
    { label: 'Backlog', value: backlog, color: '#CCCCCC' },
    { label: 'Unpainted', value: unpainted, color: '#9E9E9E' },
    { label: 'Primed', value: primed, color: '#FF9500' },
    { label: 'In Progress', value: inProgress, color: '#4B7BEC' },
    { label: 'Completed', value: completed, color: '#4CAF50' },
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold text-[#1A1A2E] mb-3">Painting Pipeline</h3>
      <div className="flex h-3 rounded-full overflow-hidden mb-4 bg-[#EFEFEF]">
        {total > 0 && segments.map((seg) => (
          <div
            key={seg.label}
            style={{ width: `${(seg.value / total) * 100}%`, backgroundColor: seg.color }}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {segments.slice(1).map((seg) => (
          <div key={seg.label} className="text-center">
            <p className="text-lg font-bold text-[#1A1A2E]">{seg.value}</p>
            <p className="text-xs text-[#888888]">{seg.label}</p>
            <div className="w-2 h-2 rounded-full mx-auto mt-1" style={{ backgroundColor: seg.color }} />
          </div>
        ))}
      </div>
    </div>
  );
}
