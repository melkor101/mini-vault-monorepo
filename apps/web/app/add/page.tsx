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
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Add Miniature</h1>
        <p className="text-sm text-[#888888]">Add a new miniature to your collection</p>
      </div>

      <div className="bg-white rounded-xl border border-[#EFEFEF] p-6 max-w-lg">
        <div className="space-y-4">
          <FormField label="Name">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter miniature name"
              className="w-full px-3 py-2 border border-[#EFEFEF] rounded-lg text-sm text-[#1A1A2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </FormField>

          <FormField label="Brand">
            <FormDropdown
              value={brand}
              onChange={setBrand}
              options={BRAND_OPTIONS}
              placeholder="Select brand"
            />
          </FormField>

          <FormField label="Type">
            <FormDropdown
              value={type}
              onChange={setType}
              options={TYPE_OPTIONS}
              placeholder="Select type"
            />
          </FormField>

          <FormField label="Status">
            <FormDropdown
              value={status}
              onChange={setStatus}
              options={PAINT_STATUS_OPTIONS}
              placeholder="Select status"
            />
          </FormField>

          <FormField label="Storage Box">
            <FormDropdown
              value={storageBox}
              onChange={setStorageBox}
              options={STORAGE_BOX_OPTIONS}
              placeholder="Select box (optional)"
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
