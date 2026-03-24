import { createClient } from '@/lib/supabase/server';
import { CollectionView } from './collection-view';
import type { Miniature, PaintStatus } from '@/lib/types';

const STATUS_COLORS: Record<PaintStatus, string> = {
  backlog: '#9E9E9E',
  unpainted: '#9E9E9E',
  primed: '#FF9500',
  inProgress: '#4B7BEC',
  completed: '#4CAF50',
};

const STATUS_THUMBNAIL: Record<PaintStatus, string[]> = {
  backlog: ['#BDBDBD', '#9E9E9E'],
  unpainted: ['#BDBDBD', '#9E9E9E'],
  primed: ['#FFB74D', '#FF9500'],
  inProgress: ['#64B5F6', '#4B7BEC'],
  completed: ['#81C784', '#4CAF50'],
};

export default async function CollectionPage() {
  const supabase = await createClient();
  const { data: rows } = await supabase
    .from('miniatures')
    .select('*')
    .order('created_at', { ascending: false });

  const miniatures: Miniature[] = (rows ?? []).map((row) => {
    const status = row.status as PaintStatus;
    return {
      id: row.id,
      name: row.name,
      brand: row.brand,
      type: row.type,
      status,
      storageBox: row.storage_box,
      notes: row.notes ?? '',
      lastUpdated: row.last_updated,
      thumbnailColors: row.thumbnail_colors?.length ? row.thumbnail_colors : STATUS_THUMBNAIL[status],
      badgeColor: row.badge_color || STATUS_COLORS[status],
      gameSystem: row.game_system,
    };
  });

  return (
    <div className="p-6">
      <CollectionView miniatures={miniatures} />
    </div>
  );
}
