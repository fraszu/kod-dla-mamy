import React from 'react';
import { FEATURES } from '../data/mdmData';

export const Features: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#111111] text-white px-6 sm:px-12 border-y border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {FEATURES.map((item) => (
            <div
              key={item.id}
              className="p-8 bg-[#161616] border border-white/5 hover:border-[#b08d57]/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#b08d57]/15 border border-[#b08d57]/40 text-[#d4b483] text-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#b08d57] group-hover:text-white transition-all duration-300">
                <span>{item.icon}</span>
              </div>
              <h3 className="font-cormorant text-2xl font-medium text-white mb-2.5 group-hover:text-[#d4b483] transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
