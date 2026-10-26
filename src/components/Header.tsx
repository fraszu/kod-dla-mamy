import React, { useState, useEffect } from 'react';
import { Instagram, Phone } from 'lucide-react';
import { MDM_INFO, INSTAGRAM_LINKS } from '../data/mdmData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Start', href: '#home' },
    { name: 'Kolekcje', href: '#collections' },
    { name: 'Okazje', href: '#occasions' },
    { name: 'Poprawki', href: '#tailoring' },
    { name: 'O nas', href: '#about' },
    { name: 'Salony', href: '#locations' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header
      id="header"
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-[#111111]/95 backdrop-blur-md shadow-2xl py-0'
          : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-0'
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#111111] text-white py-2 px-4 sm:px-12 text-[11px] sm:text-[12px] tracking-widest border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3 mx-auto sm:mx-0 text-center sm:text-left">
          <span className="text-[#d4b483] font-semibold">{MDM_INFO.fullName.toUpperCase()}</span>
          <span className="hidden lg:inline text-stone-400"> — {MDM_INFO.tagline}</span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-[11px] tracking-wider">
          {/* Direct Phone in Top bar */}
          <a
            href={`tel:${MDM_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 text-[#d4b483] hover:text-white font-medium transition-colors"
            title="Zadzwoń do salonu MDM"
          >
            <Phone size={12} className="stroke-[2.5]" />
            <span>Zadzwoń: {MDM_INFO.phoneDisplay}</span>
          </a>

          {/* Instagram links */}
          <div className="flex items-center gap-3">
            <span className="text-stone-400 flex items-center gap-1">
              <Instagram size={12} className="text-[#d4b483]" />
              Instagram:
            </span>
            {INSTAGRAM_LINKS.map((insta, idx) => (
              <a
                key={idx}
                href={insta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-[#d4b483] transition-colors underline-offset-2 hover:underline"
              >
                {insta.label.replace('Instagram ', '')}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-[1400px] mx-auto px-6 sm:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          id="nav-logo"
          className="text-white font-cormorant text-2xl sm:text-3xl font-bold tracking-[3px] hover:opacity-95 transition-opacity"
        >
          {MDM_INFO.brandName} <span className="text-[#b08d57] font-normal">{MDM_INFO.brandSuffix}</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className="text-white hover:text-[#d4b483] text-[13px] font-medium tracking-[1.5px] uppercase transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b08d57] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA on Desktop: Direct Phone Button */}
        <div className="hidden sm:flex lg:hidden items-center">
          <a
            href={`tel:${MDM_INFO.phoneRaw}`}
            className="flex items-center gap-2 bg-[#b08d57] hover:bg-[#c29f68] text-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
          >
            <Phone size={13} />
            <span>{MDM_INFO.phoneShort}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          id="menuToggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white text-2xl p-1 focus:outline-none cursor-pointer"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="navLinks"
          className="lg:hidden bg-[#111111]/98 backdrop-blur-lg border-t border-white/10 px-6 py-8 flex flex-col items-center gap-5 text-center animate-fadeIn"
        >
          {/* Quick Call in Mobile Menu */}
          <a
            href={`tel:${MDM_INFO.phoneRaw}`}
            className="w-full flex items-center justify-center gap-2 bg-[#b08d57] text-white py-3 px-4 text-xs font-semibold uppercase tracking-[2px] shadow-md"
          >
            <Phone size={14} />
            <span>Zadzwoń do nas: {MDM_INFO.phoneDisplay}</span>
          </a>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#d4b483] text-sm font-medium tracking-[2px] uppercase py-2 w-full border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-stone-400 flex items-center gap-1.5">
              <Instagram size={13} className="text-[#d4b483]" />
              Instagram:
            </span>
            <div className="flex gap-4">
              {INSTAGRAM_LINKS.map((insta, idx) => (
                <a
                  key={idx}
                  href={insta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#d4b483] hover:underline font-medium"
                >
                  {insta.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
