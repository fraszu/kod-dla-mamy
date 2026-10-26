import React from 'react';
import { Phone } from 'lucide-react';
import { MDM_INFO } from '../data/mdmData';

export const MobileCallButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 z-40 sm:hidden">
      <a
        href={`tel:${MDM_INFO.phoneRaw}`}
        aria-label={`Zadzwoń do salonu: ${MDM_INFO.phoneShort}`}
        className="group flex items-center gap-2 bg-[#b08d57] hover:bg-[#c29f68] text-white px-4 py-3 rounded-full shadow-2xl border border-white/20 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <div className="relative flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
          <Phone size={16} className="relative z-10 stroke-[2.5]" />
        </div>
        <span className="text-xs font-semibold tracking-wider uppercase">
          {MDM_INFO.phoneShort}
        </span>
      </a>
    </div>
  );
};
