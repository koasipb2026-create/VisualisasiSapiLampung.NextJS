'use client';

import { useRef } from 'react';
import Image from 'next/image';

const activities = [
  'Pembukaan Koasistensi Karantina',
  'Pemeriksaan Kapal Angkut Ternak',
  'Pengenalan Area Kerja Karantina',
  'Diskusi Prosedur Pemeriksaan',
  'Kegiatan Lapangan Mahasiswa',
];

export default function ActivityGallery() {
  const galleryRef = useRef(null);

  function scrollGallery(direction) {
    galleryRef.current?.scrollBy({
      left: direction * galleryRef.current.clientWidth * 0.82,
      behavior: 'smooth',
    });
  }

  return (
    <section className="mt-14 border-t border-gray-300 pt-8">
      <h2 className="mb-7 text-center text-xl text-[#182b69]">Cuplikan Kegiatan</h2>
      <div className="relative">
        <div
          ref={galleryRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-color:#182b69_#e5e7eb] [scrollbar-width:thin]"
          aria-label="Galeri cuplikan kegiatan"
        >
          {activities.map((activity) => (
            <article key={activity} className="w-[82%] shrink-0 snap-center sm:w-[48%] lg:w-[32%]">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src="/assets/img/Background.jpg"
                  alt={`Foto dummy ${activity}`}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 48vw, 32vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3 text-center text-sm font-medium text-[#182b69]">{activity}</h3>
            </article>
          ))}
        </div>
        <button type="button" onClick={() => scrollGallery(-1)} aria-label="Geser kegiatan ke kiri" className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#182b69] shadow-md transition hover:bg-white">
          <span aria-hidden="true">&#8592;</span>
        </button>
        <button type="button" onClick={() => scrollGallery(1)} aria-label="Geser kegiatan ke kanan" className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#182b69] shadow-md transition hover:bg-white">
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>
    </section>
  );
}