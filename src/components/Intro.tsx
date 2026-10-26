import React from 'react';
import { MDM_INFO } from '../data/mdmData';

export const Intro: React.FC = () => {
  return (
    <section id="intro" className="py-24 sm:py-32 bg-white text-center px-6 sm:px-12">
      <div className="max-w-3xl mx-auto">
        <span className="text-[#b08d57] text-xs font-semibold uppercase tracking-[4px] block mb-4">
          {MDM_INFO.introLabel}
        </span>
        <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-medium text-[#111111] mb-6">
          {MDM_INFO.introTitle}
        </h2>
        <p className="text-stone-600 text-base sm:text-lg leading-[1.9] font-light">
          {MDM_INFO.introText}
        </p>
      </div>
    </section>
  );
};
