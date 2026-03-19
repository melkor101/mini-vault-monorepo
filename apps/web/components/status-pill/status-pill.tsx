import type { PaintStatus } from '@/lib/types';

const STATUS_CONFIG: Record<PaintStatus, { label: string; icon: string; color: string; bg: string }> = {
  backlog: { label: 'Backlog', icon: '📋', color: '#CCCCCC', bg: '#F5F5F5' },
  unpainted: { label: 'Unpainted', icon: '⬜', color: '#9E9E9E', bg: '#F5F5F5' },
  primed: { label: 'Primed', icon: '🟡', color: '#FF9500', bg: '#FFF8E1' },
  inProgress: { label: 'In Progress', icon: '🔵', color: '#4B7BEC', bg: '#E8EFFE' },
  completed: { label: 'Completed', icon: '✅', color: '#4CAF50', bg: '#E8F5E9' },
};

export function StatusPill({ status }: { status: PaintStatus }) {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
      style={{ color: config.color, backgroundColor: config.bg }}
    >
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </span>
  );
}
