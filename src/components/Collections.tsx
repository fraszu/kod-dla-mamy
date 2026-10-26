import React from 'react';
import { COLLECTIONS } from '../data/mdmData';

export const Collections: React.FC = () => {
  return (
    <section id="collections" className="py-24 sm:py-28 bg-[#f7f5f0] px-6 sm:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#b08d57] text-xs uppercase tracking-[4px] font-semibold block mb-3">
            Nasza oferta
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-medium text-[#111111]">
            Odkryj nasze kolekcje
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              className="group relative h-[500px] sm:h-[620px] overflow-hidden shadow-md cursor-pointer"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-8 sm:p-12">
                <div className="text-white space-y-3">
                  <h3 className="font-cormorant text-4xl sm:text-5xl font-medium text-white group-hover:text-[#d4b483] transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-stone-300 text-sm sm:text-base font-light max-w-md">
                    {col.description}
                  </p>
                  <a
                    href={col.linkHref}
                    className="inline-block text-[#d4b483] group-hover:text-white text-xs font-semibold uppercase tracking-[2px] pt-2 transition-colors cursor-pointer"
                  >
                    {col.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
