import { MINIATURES } from '@/lib/mock-data';
import { CollectionHeroCard } from '@/components/collection-hero-card/collection-hero-card';
import { StatCard } from '@/components/stat-card/stat-card';
import { StatusDonut } from '@/components/status-donut/status-donut';
import { PaintingPipeline } from '@/components/painting-pipeline/painting-pipeline';
import { ProgressMetrics } from '@/components/progress-metrics/progress-metrics';
import { WeeklyStatCard } from '@/components/weekly-stat-card/weekly-stat-card';
import { RecentActivityList } from '@/components/recent-activity-list/recent-activity-list';

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
    { label: 'Unpainted', value: unpainted, color: '#9E9E9E' },
  ];

  const metrics = [
    { label: 'Completed', value: completed, total, color: '#4CAF50' },
    { label: 'In Progress', value: inProgress, total, color: '#4B7BEC' },
    { label: 'Primed', value: primed, total, color: '#FF9500' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Dashboard</h1>
        <p className="text-sm text-[#888888]">Your painting progress at a glance</p>
      </div>

      <div className="grid grid-cols-2 gap-4 items-stretch">
        <CollectionHeroCard total={total} painted={completed} inProgress={inProgress} />
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

      <div className="bg-white rounded-xl border border-[#EFEFEF] p-4">
        <h3 className="text-sm font-semibold text-[#1A1A2E] mb-3">Progress Metrics</h3>
        <ProgressMetrics metrics={metrics} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <WeeklyStatCard
          icon="🎨"
          title="This Week"
          count={1}
          subtitle="miniatures painted"
          gradient={['#6C63FF', '#4B3FBF']}
        />
        <WeeklyStatCard
          icon="⚡"
          title="Streak"
          count={3}
          subtitle="days painting"
          gradient={['#FF9500', '#E65100']}
        />
        <WeeklyStatCard
          icon="🏆"
          title="Total XP"
          count={950}
          subtitle="experience points"
          gradient={['#4CAF50', '#2E7D32']}
        />
      </div>

      <div className="bg-white rounded-xl border border-[#EFEFEF] p-4">
        <h3 className="text-sm font-semibold text-[#1A1A2E] mb-3">Recent Activity</h3>
        <RecentActivityList miniatures={MINIATURES} />
      </div>
    </div>
  );
}
