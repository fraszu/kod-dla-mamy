import React, { useState, useEffect } from 'react';
import { MDM_INFO } from '../data/mdmData';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDE_DURATION = 8000; // 8 seconds per slide

const HERO_SLIDES = [
  {
    id: 'womens',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=2000&auto=format&fit=crop&q=85',
    category: 'Moda damska',
    label: 'Kolekcja Damska',
    subtitle: 'Kobiecy szyk i elegancja',
  },
  {
    id: 'mens',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=2000&auto=format&fit=crop&q=85',
    category: 'Moda męska',
    label: 'Kolekcja Męska',
    subtitle: 'Klasyczne garnitury i krawiectwo wizytowe',
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Preload images to eliminate any flash or delay
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Automatic slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white overflow-hidden bg-[#0d0d0d]"
    >
      {/* Background Slides with Cinema Crossfade & Gentle Ken-Burns Zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{
              opacity: 1,
              scale: 1.0,
              transition: {
                opacity: { duration: 1.8, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 9.0, ease: 'easeOut' },
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              transition: { duration: 1.8, ease: [0.4, 0, 0.2, 1] },
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${activeSlide.image}")`,
            }}
          />
        </AnimatePresence>

        {/* Stable dark gradient vignettes so text remains razor-sharp and steady */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-[1]" />
      </div>

      {/* Main Content */}
      <div className="max-w-[1300px] w-full mx-auto px-6 sm:px-12 py-32 sm:py-40 relative z-10">
        <div className="max-w-2xl">
          {/* Subtitle & Animated Active Badge */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#d4b483] tracking-[5px] uppercase text-xs sm:text-sm font-semibold">
              {MDM_INFO.heroSubtitle}
            </span>

            <AnimatePresence mode="wait">
              <motion.span
                key={activeSlide.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4 }}
                className="inline-block px-3 py-0.5 text-[10px] uppercase tracking-[2px] bg-[#b08d57]/30 border border-[#b08d57]/60 text-[#d4b483] rounded-full backdrop-blur-sm"
              >
                {activeSlide.label}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Heading */}
          <h1 className="font-cormorant text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium leading-[0.92] mb-7 tracking-tight">
            Elegancja,
            <br />
            która <span className="text-[#d4b483] italic">pozostaje.</span>
          </h1>

          {/* Description */}
          <p className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10 max-w-xl font-light">
            {MDM_INFO.heroDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#collections"
              className="inline-block bg-[#b08d57] hover:bg-[#d4b483] text-white px-8 py-4 text-xs font-semibold uppercase tracking-[2px] transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer"
            >
              Poznaj kolekcję
            </a>
            <a
              href="#locations"
              className="inline-block border border-white hover:bg-white hover:text-[#111111] text-white px-8 py-4 text-xs font-semibold uppercase tracking-[2px] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              Odwiedź salon
            </a>
          </div>

          {/* Slide Switchers with Animated Progress Indicator */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative overflow-hidden flex items-center gap-2.5 text-xs uppercase tracking-wider py-2 px-4 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-black/40 text-white border border-[#b08d57] shadow-md'
                      : 'text-stone-400 hover:text-white bg-black/20 border border-white/10 hover:border-white/30'
                  }`}
                  aria-label={`Przełącz na ${slide.category}`}
                >
                  {/* Progress fill bar inside active button */}
                  {isActive && (
                    <motion.div
                      key={`progress-${slide.id}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                      className="absolute left-0 top-0 bottom-0 bg-[#b08d57]/25 pointer-events-none"
                    />
                  )}
                  <span
                    className={`relative z-10 w-2 h-2 rounded-full transition-colors ${
                      isActive ? 'bg-[#b08d57]' : 'bg-white/40'
                    }`}
                  />
                  <span className="relative z-10 text-[11px] font-medium tracking-[1.5px]">
                    {slide.category}
                  </span>
                </button>
              );
            })}

            {/* Subtle arrows for quick switching */}
            <div className="flex items-center gap-1.5 ml-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-white/15 bg-black/30 hover:bg-[#b08d57] hover:border-[#b08d57] text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Poprzedni slajd"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-white/15 bg-black/30 hover:bg-[#b08d57] hover:border-[#b08d57] text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Następny slajd"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white text-[11px] uppercase tracking-[3px] font-medium animate-hero-bounce flex flex-col items-center gap-1 cursor-pointer z-10"
      >
        <span>↓ Przewiń</span>
      </a>
    </section>
  );
};
