import { ACHIEVEMENTS, REWARD } from '@/lib/mock-data';

const RARITY_COLORS: Record<string, { color: string; bg: string }> = {
  common: { color: '#9E9E9E', bg: '#F5F5F5' },
  uncommon: { color: '#4CAF50', bg: '#E8F5E9' },
  rare: { color: '#4B7BEC', bg: '#E8EFFE' },
  epic: { color: '#9C27B0', bg: '#F3E5F5' },
  legendary: { color: '#FF9500', bg: '#FFF8E1' },
};

const XP_PER_LEVEL = 300;

export default function RewardsPage() {
  const xpInLevel = REWARD.xp % XP_PER_LEVEL;
  const xpPct = Math.round((xpInLevel / XP_PER_LEVEL) * 100);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Rewards</h1>
        <p className="text-sm text-[#888888]">Your achievements and progress</p>
      </div>

      <div
        className="rounded-2xl p-6 text-white mb-6"
        style={{ background: 'linear-gradient(135deg, #4B8EF0, #7B5FDC)' }}
      >
        <p className="text-sm font-medium opacity-80 mb-1">Level {REWARD.level}</p>
        <p className="text-4xl font-bold mb-1">{REWARD.xp} <span className="text-lg font-normal opacity-80">XP</span></p>
        <p className="text-xs opacity-80 mb-3">{xpInLevel} / {XP_PER_LEVEL} XP to next level</p>
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full" style={{ width: `${xpPct}%` }} />
        </div>
      </div>

      <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-wide mb-3">
        Achievements ({REWARD.unlockedIds.length})
      </h2>
      <div className="space-y-3">
        {ACHIEVEMENTS.map((ach) => {
          const unlocked = REWARD.unlockedIds.includes(ach.id);
          const rarityStyle = RARITY_COLORS[ach.rarity] ?? RARITY_COLORS['common']!;
          return (
            <div
              key={ach.id}
              className={`flex items-center gap-3 p-4 bg-white rounded-xl border transition-opacity ${
                unlocked ? 'border-[#EFEFEF]' : 'border-[#EFEFEF] opacity-50'
              }`}
            >
              <span className="text-2xl">{ach.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#1A1A2E]">{ach.name}</p>
                <p className="text-xs text-[#888888]">{ach.description}</p>
              </div>
              <div className="text-right">
                <span
                  className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: rarityStyle.color, backgroundColor: rarityStyle.bg }}
                >
                  {ach.rarity}
                </span>
                <p className="text-xs text-[#888888] mt-0.5">+{ach.xp} XP</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
