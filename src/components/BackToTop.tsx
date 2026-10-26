import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show button after scrolling past 400px (typically past the upper part of hero)
      setIsVisible(scrollY > 400);

      // Calculate total page scroll percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max((scrollY / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40"
        >
          <button
            onClick={scrollToTop}
            aria-label="Wróć do góry"
            title="Wróć do góry"
            className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#111111]/90 hover:bg-[#b08d57] text-[#d4b483] hover:text-white border border-[#b08d57]/40 hover:border-[#b08d57] shadow-xl hover:shadow-2xl backdrop-blur-md transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b08d57] focus:ring-offset-2 focus:ring-offset-[#111111]"
          >
            {/* Circular Scroll Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white/10"
              />
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="#b08d57"
                strokeWidth="2.5"
                strokeDasharray={132}
                strokeDashoffset={132 - (132 * scrollProgress) / 100}
                strokeLinecap="round"
                className="transition-all duration-150 group-hover:stroke-white"
              />
            </svg>

            {/* Icon with bounce-on-hover animation */}
            <div className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
              <ArrowUp size={20} className="stroke-[2.2]" />
            </div>

            {/* Floating tooltip on hover */}
            <span className="pointer-events-none absolute -top-9 right-1/2 translate-x-1/2 whitespace-nowrap rounded bg-[#141414] border border-[#b08d57]/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[1.5px] text-[#d4b483] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              Do góry
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
