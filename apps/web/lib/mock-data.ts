import type { Achievement, Location, Miniature, RewardData, StorageBox } from './types';

export const MINIATURES: Miniature[] = [
  {
    id: 'mini-1',
    name: 'Space Marine Captain',
    brand: 'Games Workshop',
    type: 'Character',
    status: 'completed',
    storageBox: 'box-a',
    notes: 'Painted with Macragge Blue base, highlighted with Calgar Blue',
    lastUpdated: '2026-03-10',
    thumbnailColors: ['#4B7BEC', '#2C3E70', '#C0C0C0'],
    badgeColor: '#4CAF50',
  },
  {
    id: 'mini-2',
    name: 'Ork Boyz Squad',
    brand: 'Games Workshop',
    type: 'Infantry',
    status: 'inProgress',
    storageBox: 'box-a',
    notes: 'Base coat done, working on skin tones',
    lastUpdated: '2026-03-15',
    thumbnailColors: ['#4CAF50', '#8B4513', '#808080'],
    badgeColor: '#4B7BEC',
  },
  {
    id: 'mini-3',
    name: 'Dragon Miniature',
    brand: 'Reaper',
    type: 'Monster',
    status: 'primed',
    storageBox: 'box-b',
    notes: 'Primed black, planning red and gold scheme',
    lastUpdated: '2026-03-12',
    thumbnailColors: ['#CC0000', '#FFD700', '#333333'],
    badgeColor: '#FF9500',
  },
];

export const LOCATIONS: Location[] = [
  { id: 'loc-1', icon: '🗄️', name: 'Display Cabinet' },
  { id: 'loc-2', icon: '📦', name: 'Storage Room' },
  { id: 'loc-3', icon: '🎨', name: 'Painting Desk' },
];

export const BOXES: StorageBox[] = [
  { id: 'box-a', name: 'Box A', color: '#4B7BEC', locationId: null },
  { id: 'box-b', name: 'Box B', color: '#FF9500', locationId: null },
  { id: 'box-c', name: 'Box C', color: '#4CAF50', locationId: null },
];

export const REWARD: RewardData = {
  xp: 950,
  level: 4,
  unlockedIds: ['ach-1', 'ach-2', 'ach-3', 'ach-4', 'ach-5', 'ach-6', 'ach-7'],
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    icon: '🎨',
    name: 'First Stroke',
    description: 'Paint your first miniature',
    xp: 50,
    rarity: 'common',
    category: 'painting',
  },
  {
    id: 'ach-2',
    icon: '⚡',
    name: 'Speed Painter',
    description: 'Complete 3 miniatures in one week',
    xp: 100,
    rarity: 'uncommon',
    category: 'painting',
  },
  {
    id: 'ach-3',
    icon: '📦',
    name: 'Organized',
    description: 'Create your first storage box',
    xp: 30,
    rarity: 'common',
    category: 'organization',
  },
  {
    id: 'ach-4',
    icon: '🏆',
    name: 'Collector',
    description: 'Add 10 miniatures to your collection',
    xp: 150,
    rarity: 'rare',
    category: 'collection',
  },
  {
    id: 'ach-5',
    icon: '🌟',
    name: 'Master Painter',
    description: 'Complete 25 miniatures',
    xp: 500,
    rarity: 'epic',
    category: 'painting',
  },
  {
    id: 'ach-6',
    icon: '🎭',
    name: 'Variety Pack',
    description: 'Paint miniatures of 5 different types',
    xp: 200,
    rarity: 'rare',
    category: 'painting',
  },
  {
    id: 'ach-7',
    icon: '💎',
    name: 'Legend',
    description: 'Reach level 10',
    xp: 1000,
    rarity: 'legendary',
    category: 'progression',
  },
];
