import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import { GALLERY, INSTAGRAM_LINKS } from '../data/mdmData';

export const Gallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-white px-6 sm:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#b08d57] text-xs uppercase tracking-[4px] font-semibold block mb-3">
            Inspiracje
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-medium text-[#111111]">
            Świat MDM
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item.image)}
              className="h-[420px] sm:h-[480px] overflow-hidden group cursor-pointer relative bg-stone-100 border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              
              {/* Category tag */}
              {item.category && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#111111]/85 backdrop-blur-xs text-[#d4b483] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[2px] px-3 py-1.5 border border-[#b08d57]/40">
                    {item.category}
                  </span>
                </div>
              )}

              {/* Bottom gradient & caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-7">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-medium text-white mb-1">
                    {item.title || item.alt}
                  </h3>
                  <p className="text-stone-300 text-xs font-light tracking-wide line-clamp-1">
                    {item.alt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-white/90 text-xs">
                  <span className="text-[#d4b483] uppercase tracking-[2px] text-[10px] font-semibold">
                    Kolekcja MDM
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-light flex items-center gap-1 group-hover:text-[#d4b483] transition-colors">
                    Powiększ +
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Bar */}
        <div className="mt-12 p-6 sm:p-8 bg-[#111111] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-stone-800">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full border border-[#b08d57] flex items-center justify-center text-[#d4b483] shrink-0 mx-auto sm:mx-0">
              <Instagram size={22} />
            </div>
            <div>
              <h4 className="font-cormorant text-2xl font-medium text-white">
                Śledź nasze nowości na Instagramie
              </h4>
              <p className="text-stone-400 text-xs sm:text-sm font-light">
                Codzienne stylizacje, relacje z salonów oraz zapowiedzi nowych kolekcji
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            {INSTAGRAM_LINKS.map((insta, idx) => (
              <a
                key={idx}
                href={insta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#b08d57] hover:bg-[#d4b483] text-white px-5 py-3 text-xs font-semibold uppercase tracking-[1.5px] transition-colors shadow-sm cursor-pointer"
              >
                <Instagram size={14} />
                <span>{insta.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] overflow-hidden">
            <img src={activePhoto} alt="Podgląd inspiracji MDM" className="w-full h-full object-contain" />
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 text-white text-3xl font-light hover:text-[#d4b483]"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
