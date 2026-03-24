'use client';

import { useState } from 'react';
import { MiniatureCard } from '@/components/miniature-card/miniature-card';
import { AddMiniatureModal } from '@/components/add-miniature-modal/add-miniature-modal';
import type { Miniature } from '@/lib/types';

export function CollectionView({ miniatures }: { miniatures: Miniature[] }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A2E]">Collection</h1>
          <p className="text-sm text-[#888888]">{miniatures.length} miniatures total</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#6C63FF] text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
            </svg>
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#EFEFEF] bg-white text-[#888888] hover:text-[#1A1A2E] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="8" y1="6" x2="21" y2="6"/>
              <line x1="8" y1="12" x2="21" y2="12"/>
              <line x1="8" y1="18" x2="21" y2="18"/>
              <line x1="3" y1="6" x2="3.01" y2="6"/>
              <line x1="3" y1="12" x2="3.01" y2="12"/>
              <line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Search miniatures..."
            className="w-full pl-9 pr-4 py-2 border border-[#EFEFEF] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            readOnly
          />
        </div>
        <select className="px-3 py-2 border border-[#EFEFEF] rounded-lg text-sm bg-white text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#6C63FF] cursor-pointer">
          <option value="">All Statuses</option>
          <option value="backlog">Backlog</option>
          <option value="unpainted">Unpainted</option>
          <option value="primed">Primed</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <select className="px-3 py-2 border border-[#EFEFEF] rounded-lg text-sm bg-white text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#6C63FF] cursor-pointer">
          <option value="">All Types</option>
          <option value="Infantry">Infantry</option>
          <option value="Cavalry">Cavalry</option>
          <option value="Monster">Monster</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Character">Character</option>
          <option value="Terrain">Terrain</option>
        </select>
      </div>

      {miniatures.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#F5F6FA] flex items-center justify-center mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          </div>
          <p className="text-sm font-medium text-[#1A1A2E] mb-1">No miniatures yet</p>
          <p className="text-xs text-[#888888]">Add your first miniature to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {miniatures.map((mini) => (
            <MiniatureCard key={mini.id} mini={mini} />
          ))}
        </div>
      )}

      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#6C63FF] text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>

      {showModal && <AddMiniatureModal onClose={() => setShowModal(false)} />}
    </>
  );
}
