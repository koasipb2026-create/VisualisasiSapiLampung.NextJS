'use client';

import { useState } from 'react';

/**
 * Modal untuk memilih rentang tanggal.
 * Saat ini fitur filter tanggal dinonaktifkan (sesuai dengan versi Laravel).
 */
export default function DatePickerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-xs w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-sm font-bold text-[#0d1b3e] mb-3">
          Pilih Rentang Tanggal
        </h3>
        <p className="text-xs text-gray-500 mb-4">
          Fitur ini sedang dinonaktifkan.
        </p>
        <button
          onClick={onClose}
          className="bg-[#0d1b3e] text-white text-xs px-4 py-2 rounded hover:bg-opacity-90 transition"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
