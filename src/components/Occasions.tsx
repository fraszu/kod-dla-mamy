import React, { useState } from 'react';
import { SPECIAL_OCCASIONS, MDM_INFO } from '../data/mdmData';
import { Sparkles, Check, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Occasions: React.FC = () => {
  const [selectedId, setSelectedId] = useState(SPECIAL_OCCASIONS[0].id);

  const activeOccasion =
    SPECIAL_OCCASIONS.find((item) => item.id === selectedId) || SPECIAL_OCCASIONS[0];

  return (
    <section id="occasions" className="py-24 sm:py-32 bg-white px-6 sm:px-12 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#b08d57] text-xs uppercase tracking-[4px] font-semibold block mb-3 flex items-center justify-center gap-1.5">
            <Sparkles size={14} />
            <span>Kreacje & Garnitury Okolicznościowe</span>
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-medium text-[#111111] mb-4">
            Stylizacje na wyjątkowe okazje
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Ślub, studniówka, uroczystość komunijna czy prestiżowy bankiet — w MDM dobierzemy garderobę perfekcyjnie dopasowaną do charakteru wydarzenia i Twojej sylwetki.
          </p>
        </div>

        {/* Occasion Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {SPECIAL_OCCASIONS.map((occ) => {
            const isActive = occ.id === selectedId;
            return (
              <button
                key={occ.id}
                onClick={() => setSelectedId(occ.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[1.5px] transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] text-[#d4b483] shadow-md border border-[#b08d57]/70 scale-105'
                    : 'bg-[#f7f5f0] text-stone-600 hover:text-[#111111] hover:bg-stone-200/80 border border-transparent'
                }`}
              >
                <span>{occ.icon}</span>
                <span>{occ.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Occasion Showcase */}
        <div className="bg-[#f7f5f0] border border-stone-200/80 grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-xl mb-12">
          {/* Main Image with Smooth Crossfade */}
          <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[480px] bg-stone-900 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeOccasion.id}
                src={activeOccasion.image}
                alt={activeOccasion.title}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1.0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute top-5 left-5 z-10">
              <span className="bg-[#111111]/90 backdrop-blur-xs text-[#d4b483] text-xs font-semibold uppercase tracking-[2px] px-3.5 py-1.5 border border-[#b08d57]/40 shadow-sm">
                {activeOccasion.badge}
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[#b08d57] text-xs font-semibold uppercase tracking-[2.5px] block mb-1">
                  {activeOccasion.subtitle}
                </span>
                <h3 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-medium text-[#111111]">
                  {activeOccasion.title}
                </h3>
              </div>

              <p className="text-stone-700 text-sm sm:text-base font-light leading-relaxed">
                {activeOccasion.description}
              </p>

              {/* Highlights checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 block">
                  Co zapewniamy w naszych salonach:
                </span>
                {activeOccasion.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                    <div className="w-5 h-5 rounded-full bg-[#b08d57]/20 text-[#b08d57] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action bar */}
            <div className="pt-8 mt-8 border-t border-stone-300/80 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium block">
                  Szykujesz się na to wydarzenie?
                </span>
                <span className="text-xs text-stone-800 font-light">
                  Zadzwoń i skonsultuj stylizację:
                </span>
              </div>
              <a
                href={`tel:${MDM_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#b08d57] hover:bg-[#c29f68] text-white px-5 py-3 text-xs font-semibold uppercase tracking-[1.5px] transition-all duration-300 shadow-sm cursor-pointer"
              >
                <Phone size={14} />
                <span>Zadzwoń: {MDM_INFO.phoneShort}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid Preview with Image Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIAL_OCCASIONS.map((item) => {
            const isActive = item.id === selectedId;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`overflow-hidden border transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                  isActive
                    ? 'border-[#b08d57] bg-white shadow-xl ring-2 ring-[#b08d57]/30 scale-[1.02]'
                    : 'border-stone-200/90 bg-stone-50/50 hover:bg-white hover:border-stone-400 hover:shadow-md'
                }`}
              >
                {/* Thumbnail Image */}
                <div className="h-40 overflow-hidden relative bg-stone-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-black/50 px-2 py-0.5 backdrop-blur-xs">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xl mb-1.5">
                      <span>{item.icon}</span>
                      <h4 className="font-cormorant text-2xl font-medium text-[#111111] group-hover:text-[#b08d57] transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-stone-600 text-xs font-light line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-semibold text-[#b08d57] uppercase tracking-wider">
                    <span>{isActive ? 'Aktualnie wybrana' : 'Zobacz szczegóły'}</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
