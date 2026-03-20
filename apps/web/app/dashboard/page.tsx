import { MINIATURES, REWARD } from '@/lib/mock-data';
import { CollectionHeroCard } from '@/components/collection-hero-card/collection-hero-card';
import { StatCard } from '@/components/stat-card/stat-card';
import { StatusDonut } from '@/components/status-donut/status-donut';
import { PaintingPipeline } from '@/components/painting-pipeline/painting-pipeline';
import { Fab } from '@/components/fab/fab';

export default function DashboardPage() {
  const total = MINIATURES.length;
  const completed = MINIATURES.filter((m) => m.status === 'completed').length;
  const inProgress = MINIATURES.filter((m) => m.status === 'inProgress').length;
  const primed = MINIATURES.filter((m) => m.status === 'primed').length;
  const unpainted = MINIATURES.filter((m) => m.status === 'unpainted').length;
  const backlog = MINIATURES.filter((m) => m.status === 'backlog').length;

  const donutSegments = [
    { label: 'Completed', value: completed, color: '#4CAF50' },
    { label: 'In Progress', value: inProgress, color: '#4B7BEC' },
    { label: 'Primed', value: primed, color: '#FF9500' },
  ];

  const statusGrid = [
    { label: 'Completed', value: completed, color: '#4CAF50' },
    { label: 'In Progress', value: inProgress, color: '#4B7BEC' },
    { label: 'Unpainted', value: unpainted, color: '#9E9E9E' },
    { label: 'Primed', value: primed, color: '#FF9500' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A2E]">Dashboard</h1>
          <p className="text-sm text-[#888888]">Your painting progress at a glance</p>
        </div>
        <button className="px-4 py-2 rounded-lg border border-[#EFEFEF] bg-white text-sm font-medium text-[#1A1A2E] hover:bg-[#F5F6FA] transition-colors">
          Mark as Completed
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 items-stretch">
        <CollectionHeroCard total={total} completed={completed} inProgress={inProgress} primed={primed} />
        <div className="flex flex-col gap-4">
          <StatCard
            title="Completed"
            count={completed}
            percentage={total > 0 ? Math.round((completed / total) * 100) : 0}
            gradient={['#4CAF50', '#2E7D32']}
          />
          <StatCard
            title="In Progress"
            count={inProgress}
            percentage={total > 0 ? Math.round((inProgress / total) * 100) : 0}
            gradient={['#4B7BEC', '#1565C0']}
          />
          <StatCard
            title="Primed"
            count={primed}
            percentage={total > 0 ? Math.round((primed / total) * 100) : 0}
            gradient={['#FF9500', '#E65100']}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-[#EFEFEF] p-4">
          <h3 className="text-sm font-semibold text-[#1A1A2E] mb-3">Status Overview</h3>
          <StatusDonut segments={donutSegments} />
        </div>
        <div className="bg-white rounded-xl border border-[#EFEFEF] p-4">
          <PaintingPipeline
            backlog={backlog}
            unpainted={unpainted}
            primed={primed}
            inProgress={inProgress}
            completed={completed}
            total={total}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-[#EFEFEF] p-4">
          <h3 className="text-sm font-semibold text-[#1A1A2E] mb-3">Status Overview</h3>
          <div className="grid grid-cols-2 gap-3">
            {statusGrid.map((s) => {
              const pct = total > 0 ? Math.round((s.value / total) * 100) : 0;
              return (
                <div key={s.label} className="p-3 rounded-lg bg-[#F5F6FA]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                      <span className="text-xs text-[#888888]">{s.label}</span>
                    </div>
                    <span className="text-sm font-bold text-[#1A1A2E]">{s.value}</span>
                  </div>
                  <div className="h-1.5 bg-white rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: s.color }} />
                  </div>
                  <p className="text-xs text-[#888888] mt-1">{pct}%</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#EFEFEF] p-4">
          <h3 className="text-sm font-semibold text-[#1A1A2E] mb-3">Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#F5F6FA]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#6C63FF]/10 flex items-center justify-center text-lg">🎨</div>
                <div>
                  <p className="text-xs text-[#888888]">Miniatures painted</p>
                  <p className="text-xs text-[#888888]">{total > 0 ? Math.round((completed / total) * 100) : 0}%</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-[#1A1A2E]">{completed}</p>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#F5F6FA]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FF9500]/10 flex items-center justify-center text-lg">🏆</div>
                <div>
                  <p className="text-xs text-[#888888]">Total XP</p>
                  <p className="text-xs text-[#888888]">XP</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-[#1A1A2E]">{REWARD.xp}</p>
            </div>
          </div>
        </div>
      </div>
      <Fab href="/add" />
    </div>
  );
}
