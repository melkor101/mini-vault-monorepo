export type PaintStatus = 'backlog' | 'unpainted' | 'primed' | 'inProgress' | 'completed';

export interface Miniature {
  id: string;
  name: string;
  brand: string;
  type: string;
  status: PaintStatus;
  storageBox: string | null;
  notes: string;
  lastUpdated: string;
  thumbnailColors: string[];
  badgeColor: string;
  image?: string;
  gameSystem?: string;
}

export interface StorageBox {
  id: string;
  name: string;
  color: string;
  locationId: string | null;
}

export interface Location {
  id: string;
  icon: string;
  name: string;
}

export interface Achievement {
  id: string;
  icon: string;
  name: string;
  description: string;
  xp: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  category: string;
}

export interface RewardData {
  xp: number;
  level: number;
  unlockedIds: string[];
}
