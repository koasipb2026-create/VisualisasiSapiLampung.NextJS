'use client';

import { useState } from 'react';
import Image from 'next/image';
import DatePickerModal from './DatePickerModal';

/**
 * Komponen utama Dashboard SI BOS Q.
 * Menerima data yang sudah diproses dari server (page.jsx)
 * dan merender tampilan dashboard secara interaktif.
 */
export default function Dashboard({ summary, data, perusahaan, petugas }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* ============================================================= */}
      {/* HEADER / HERO */}
      {/* ============================================================= */}
      <header
        className="relative h-64 md:h-80 flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/assets/img/Background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Navigation */}
        <nav className="absolute top-0 w-full px-6 py-4 flex justify-between items-center bg-black/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
              <Image
                src="/assets/img/Logo_Badan_Karantina_Indonesia.png"
                alt="BKHIT Lampung Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="font-semibold tracking-wide">BKHIT Lampung</span>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="hover:text-gray-300 transition">Home</a>
            <a href="#" className="hover:text-gray-300 transition">About us</a>
            <button aria-label="Search" className="hover:text-gray-300 transition">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Hero Title */}
        <div className="text-center mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            SI BOS Q
          </h1>
          <p className="text-sm md:text-base font-medium opacity-90">
            Sistem Informasi Bongkar Sapi Karantina Lampung
          </p>
        </div>
      </header>

      {/* ============================================================= */}
      {/* MAIN DASHBOARD */}
      {/* ============================================================= */}
      <main className="flex-grow flex flex-col items-center py-10 px-4">
        <div
          className="bg-white rounded-lg w-full max-w-5xl border border-gray-200 overflow-hidden"
          style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}
        >
          {/* Dashboard Header Bar */}
          <div className="bg-[#0d1b3e] text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-[#0d1b3e]">
                <Image
                  src="/assets/img/Logo_Badan_Karantina_Indonesia.png"
                  alt="SI BOS Q Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-bold">SI BOS Q</h2>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-800 text-xs py-1 px-3 rounded border border-gray-300 outline-none flex items-center space-x-1 hover:bg-gray-50 transition"
            >
              <span>Pilih rentang tanggal...</span>
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
            </button>
          </div>

          {/* Subheader */}
          <div className="px-6 py-3 border-b border-gray-200 flex justify-between text-xs text-gray-600 font-medium">
            <span>Sistem Informasi Gabungan Pemasukan Kapal &amp; Petugas Karantina</span>
            <span>BKHIT Lampung</span>
          </div>

          <div className="p-6 space-y-6">
            {/* ======================================================= */}
            {/* METRIC CARDS */}
            {/* ======================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Filter (placeholder) */}
              <div className="bg-gray-50 border border-gray-200 rounded p-4 flex flex-col justify-center items-center">
                <select className="w-full bg-white border-gray-300 text-gray-700 text-sm rounded shadow-sm border px-2 py-1">
                  <option>Tanggal Pemasukan</option>
                </select>
              </div>

              {/* Total Kapal */}
              <div className="bg-gray-100 border border-gray-200 rounded p-4 flex flex-col justify-center items-center text-center">
                <div className="mb-2">
                  <span className="material-symbols-outlined text-[#0d1b3e]" style={{ fontSize: '32px' }}>
                    directions_boat
                  </span>
                </div>
                <span className="text-xs font-semibold text-gray-600 uppercase">Jumlah Total Kapal</span>
                <span className="text-2xl font-bold text-gray-800">{summary.jumlahKapalFormatted}</span>
                <span className="text-xs text-gray-500">kapal</span>
              </div>

              {/* Total Sapi */}
              <div className="bg-gray-100 border border-gray-200 rounded p-4 flex flex-col justify-center items-center text-center">
                <div className="mb-2 text-yellow-600 text-2xl">🐄</div>
                <span className="text-xs font-semibold text-gray-600 uppercase">Jumlah Total Sapi</span>
                <span className="text-2xl font-bold text-gray-800">{summary.jumlahSapiFormatted}</span>
                <span className="text-xs text-gray-500">ekor</span>
              </div>
            </div>

            {/* ======================================================= */}
            {/* PEMERIKSAAN KAPAL */}
            {/* ======================================================= */}
            <section className="border-2 border-gray-200 rounded-lg">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center space-x-2 rounded-t-lg">
                <span className="text-lg">📋</span>
                <h3 className="font-bold text-gray-800 text-sm">Pemeriksaan Kapal</h3>
              </div>

              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Informasi Kapal */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gray-700">Informasi Kapal</h4>

                  <div className="overflow-hidden border border-gray-200 rounded">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-[#0d1b3e] text-white">
                        <tr>
                          <th className="px-3 py-2 border-r border-[#0d1b3e]">Nama Kapal</th>
                          <th className="px-3 py-2 text-center">Port</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-100">
                        {data.length === 0 ? (
                          <tr>
                            <td colSpan={2} className="px-3 py-4 text-center text-gray-400">
                              Belum ada data kapal.
                            </td>
                          </tr>
                        ) : (
                          data.map((row, i) => (
                            <tr key={i}>
                              <td className="px-3 py-2 border-r border-gray-100 text-gray-800 font-medium">
                                {row['Nama Kapal'] || '-'}
                              </td>
                              <td className="px-3 py-2 text-center text-gray-600">
                                {row['Nama Port'] || '-'}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[10px] text-gray-400 italic">
                    * Data diambil langsung dari Google Sheets
                  </p>

                  {/* Petugas */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-700">Petugas Pemeriksa Kapal</h4>
                    <div className="bg-gray-100 border border-gray-200 rounded p-4 text-sm text-gray-700 text-center">
                      {petugas.length > 0 ? petugas.join(', ') : '-'}
                    </div>
                  </div>
                </div>

                {/* Informasi Perusahaan */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gray-700">Informasi Perusahaan Importir</h4>

                  <div className="overflow-hidden border border-gray-200 rounded">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-[#0d1b3e] text-white">
                        <tr>
                          <th className="px-3 py-2 border-r border-[#0d1b3e] text-center">Perusahaan</th>
                          <th className="px-3 py-2 text-center">Jumlah Sapi</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-100">
                        {perusahaan.length === 0 ? (
                          <tr>
                            <td colSpan={2} className="px-3 py-4 text-center text-gray-400">
                              Belum ada data perusahaan.
                            </td>
                          </tr>
                        ) : (
                          perusahaan.map((p, i) => (
                            <tr key={i}>
                              <td className="px-3 py-2 border-r border-gray-100 text-center text-gray-800 font-medium">
                                {p.nama}
                              </td>
                              <td className="px-3 py-2 text-center text-gray-600">
                                {p.totalFormatted}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* ======================================================= */}
            {/* PEMERIKSAAN KAPAL DETAIL */}
            {/* ======================================================= */}
            <section className="border-2 border-gray-200 rounded-lg">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center space-x-2 rounded-t-lg">
                <span className="text-lg">🧪</span>
                <h3 className="font-bold text-gray-800 text-sm">Pemeriksaan Kapal Detail</h3>
              </div>

              <div className="p-4">
                <div className="overflow-x-auto border border-gray-200 rounded">
                  <table className="w-full text-xs text-left whitespace-nowrap">
                    <thead className="bg-[#0d1b3e] text-white">
                      <tr>
                        <th className="px-3 py-2 border-r border-[#0d1b3e]">Tanggal</th>
                        <th className="px-3 py-2 border-r border-[#0d1b3e]">Nama Kapal</th>
                        <th className="px-3 py-2 border-r border-[#0d1b3e]">Port</th>
                        <th className="px-3 py-2 border-r border-[#0d1b3e]">Perusahaan</th>
                        <th className="px-3 py-2 border-r border-[#0d1b3e] text-center">Jumlah Sapi</th>
                        <th className="px-3 py-2 border-r border-[#0d1b3e]">Petugas Pemeriksa Kapal</th>
                        <th className="px-3 py-2 border-r border-[#0d1b3e]">Jenis Hewan</th>
                        <th className="px-3 py-2 border-r border-[#0d1b3e]">Nopol Kendaraan</th>
                        <th className="px-3 py-2 text-center">Dilakukan Disinfeksi Alat Angkut?</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                      {data.length === 0 ? (
                        <tr>
                          <td colSpan={9} className="px-3 py-6 text-center text-gray-400">
                            Belum ada data dari Google Sheets.
                          </td>
                        </tr>
                      ) : (
                        data.map((row, i) => (
                          <tr key={i}>
                            <td className="px-3 py-2 border-r border-gray-100 text-gray-600">
                              {row.tanggalFormatted}
                            </td>
                            <td className="px-3 py-2 border-r border-gray-100 text-gray-800 font-medium">
                              {row['Nama Kapal'] || '-'}
                            </td>
                            <td className="px-3 py-2 border-r border-gray-100 text-gray-600">
                              {row['Nama Port'] || '-'}
                            </td>
                            <td className="px-3 py-2 border-r border-gray-100 text-gray-600">
                              {row['Nama Perusahaan'] || '-'}
                            </td>
                            <td className="px-3 py-2 border-r border-gray-100 text-center font-bold text-gray-800">
                              {row.jumlahSapiFormatted}
                            </td>
                            <td className="px-3 py-2 border-r border-gray-100 text-gray-600">
                              {row['Petugas Pemeriksa Kapal'] || '-'}
                            </td>
                            <td className="px-3 py-2 border-r border-gray-100 text-gray-600">
                              {row['Jenis Hewan'] || '-'}
                            </td>
                            <td className="px-3 py-2 border-r border-gray-100 text-gray-600">
                              {row['Nopol Kendaraan'] || '-'}
                            </td>
                            <td className="px-3 py-2 text-center text-gray-600">
                              {row['Dilakukan Disinfeksi Alat Angkut?'] || '-'}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ============================================================= */}
        {/* ACTION BUTTONS & FOOTER LINKS */}
        {/* ============================================================= */}
        <div className="w-full max-w-3xl mt-12 mb-12 flex flex-col space-y-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc7bOBkMP_nxdE1u2AtoDxEBiV3sUz3WBbX4xsnzxk8Lfy8Mw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#0d1b3e] hover:bg-opacity-90 text-white font-medium py-4 px-4 shadow transition duration-200 text-sm tracking-wide rounded-xl text-center"
          >
            1. Pengisian Google Form SIGAP-Karantina
          </a>

          <a
            href="https://docs.google.com/spreadsheets/d/1DVG_ltcc7VWxvj8PtsfAsrYk-w6usXvcc_otH1P9134/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#0d1b3e] hover:bg-opacity-90 text-white font-medium py-4 px-4 shadow transition duration-200 text-sm tracking-wide rounded-xl text-center"
          >
            2. Database SIGAP-Karantina
          </a>

          <div className="pt-8 text-center">
            <p className="text-gray-800 font-medium mb-6">
              Karantina KUAT untuk Indonesia Hebat!
            </p>

            <div className="flex justify-center items-center space-x-4">
              <a
                href="https://karantinaindonesia.go.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/img/Logo_Badan_Karantina_Indonesia.png"
                  alt="Badan Karantina Indonesia"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </a>

              <a
                href="https://www.instagram.com/karantinalampung?igsi=MWh3bHVkYnp5emprNQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/img/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </a>

              <a
                href="https://maps.app.goo.gl/MyWpqhiLCY7UDR547?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/img/Google_Maps_Logo_2020.svg.webp"
                  alt="Google Maps"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* ============================================================= */}
      {/* DATE PICKER MODAL */}
      {/* ============================================================= */}
      <DatePickerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
