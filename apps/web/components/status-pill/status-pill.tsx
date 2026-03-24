import type { PaintStatus } from '@/lib/types';

const STATUS_CONFIG: Record<PaintStatus, { label: string; color: string; bg: string }> = {
  backlog: { label: 'Backlog', color: '#CCCCCC', bg: '#F5F5F5' },
  unpainted: { label: 'Unpainted', color: '#9E9E9E', bg: '#F5F5F5' },
  primed: { label: 'Primed', color: '#FF9500', bg: '#FFF8E1' },
  inProgress: { label: 'In Progress', color: '#4B7BEC', bg: '#E8EFFE' },
  completed: { label: 'Completed', color: '#4CAF50', bg: '#E8F5E9' },
};

export function StatusPill({ status }: { status: PaintStatus }) {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
      style={{ color: config.color, backgroundColor: config.bg }}
    >
      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: config.color }} />
      <span>{config.label}</span>
    </span>
  );
}
