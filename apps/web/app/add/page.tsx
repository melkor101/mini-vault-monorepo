'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormField } from '@/components/form/form-field';
import { FormDropdown } from '@/components/form/form-dropdown';
import { BRAND_OPTIONS, GAME_SYSTEM_OPTIONS, PAINT_STATUS_OPTIONS, STORAGE_BOX_OPTIONS, TYPE_OPTIONS } from '@/lib/miniature-options';
import { createClient } from '@/lib/supabase/client';

export default function AddPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('Infantry');
  const [status, setStatus] = useState('backlog');
  const [storageBox, setStorageBox] = useState('');
  const [gameSystem, setGameSystem] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleAdd() {
    if (!name.trim() || !brand || !type || !status) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setLoading(true);

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const { error: insertError } = await supabase.from('miniatures').insert({
      user_id: user?.id,
      name: name.trim(),
      brand,
      type,
      status,
      storage_box: storageBox || null,
      game_system: gameSystem || null,
      notes,
      last_updated: new Date().toISOString().split('T')[0],
      thumbnail_colors: [],
      badge_color: '',
    });

    setLoading(false);

    if (insertError) {
      setError(insertError.message);
      return;
    }

    router.back();
    router.refresh();
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') router.back(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ animation: 'fade-in 0.2s ease-out' }}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => router.back()}
      />

      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col"
        style={{ animation: 'modal-in 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EFEFEF]">
          <div>
            <h1 className="text-xl font-bold text-[#1A1A2E]">Add Miniature</h1>
            <p className="text-sm text-[#888888]">Add a new miniature to your collection</p>
          </div>
          <button
            type="button"
            onClick={() => router.back()}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[#888888] hover:text-[#1A1A2E] hover:bg-[#F5F6FA] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          <FormField label="Name" required>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter miniature name"
              className="w-full px-3 py-2 border border-[#EFEFEF] rounded-lg text-sm text-[#1A1A2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </FormField>

          <FormField label="Brand" required>
            <FormDropdown value={brand} onChange={setBrand} options={BRAND_OPTIONS} placeholder="Select brand" />
          </FormField>

          <FormField label="Type" required>
            <FormDropdown value={type} onChange={setType} options={TYPE_OPTIONS} placeholder="Select type" />
          </FormField>

          <FormField label="Status" required>
            <FormDropdown value={status} onChange={setStatus} options={PAINT_STATUS_OPTIONS} placeholder="Select status" />
          </FormField>

          <FormField label="Storage Box (optional)">
            <FormDropdown value={storageBox} onChange={setStorageBox} options={STORAGE_BOX_OPTIONS} placeholder="Select box" />
          </FormField>

          <FormField label="Game System (optional)">
            <FormDropdown value={gameSystem} onChange={setGameSystem} options={GAME_SYSTEM_OPTIONS} placeholder="Select game system" />
          </FormField>

          <FormField label="Notes">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes about this miniature..."
              rows={3}
              className="w-full px-3 py-2 border border-[#EFEFEF] rounded-lg text-sm text-[#1A1A2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF] resize-none"
            />
          </FormField>
        </div>

        <div className="px-6 py-4 border-t border-[#EFEFEF] space-y-3">
          {error && (
            <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
          )}
          <div className="flex gap-3">
          <button
            type="button"
            onClick={handleAdd}
            disabled={loading}
            className="flex-1 py-2.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#6C63FF' }}
          >
            {loading ? 'Saving…' : 'Add to Collection'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="flex-1 py-2.5 rounded-lg border border-[#EFEFEF] text-sm font-medium text-[#888888] hover:text-[#1A1A2E] hover:bg-[#F5F6FA] transition-colors"
          >
            Cancel
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
