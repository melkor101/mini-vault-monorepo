'use client';

import { useState } from 'react';
import { FormField } from '@/components/form/form-field';
import { FormDropdown } from '@/components/form/form-dropdown';
import { BRAND_OPTIONS, PAINT_STATUS_OPTIONS, STORAGE_BOX_OPTIONS, TYPE_OPTIONS } from '@/lib/miniature-options';

export default function AddPage() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [storageBox, setStorageBox] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <div className="p-8 flex justify-center">
      <div className="bg-white rounded-xl border border-[#EFEFEF] p-8 w-full max-w-2xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A2E]">Add Miniature</h1>
            <p className="text-sm text-[#888888]">Add a new miniature to your collection</p>
          </div>
          <button type="button" className="text-[#888888] hover:text-[#1A1A2E] transition-colors mt-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </button>
        </div>

        <div className="space-y-4">
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
            <FormDropdown
              value={brand}
              onChange={setBrand}
              options={BRAND_OPTIONS}
              placeholder="Select brand"
            />
          </FormField>

          <FormField label="Type" required>
            <FormDropdown
              value={type}
              onChange={setType}
              options={TYPE_OPTIONS}
              placeholder="Select type"
            />
          </FormField>

          <FormField label="Status" required>
            <FormDropdown
              value={status}
              onChange={setStatus}
              options={PAINT_STATUS_OPTIONS}
              placeholder="Select status"
            />
          </FormField>

          <FormField label="Storage Box (optional)">
            <FormDropdown
              value={storageBox}
              onChange={setStorageBox}
              options={STORAGE_BOX_OPTIONS}
              placeholder="Select box"
            />
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

          <button
            type="button"
            className="w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#6C63FF' }}
          >
            Add to Collection
          </button>
        </div>
      </div>
    </div>
  );
}
