import React from 'react';
import { Instagram, Facebook, Cookie, Phone, Scissors, Sparkles } from 'lucide-react';
import { MDM_INFO, FACEBOOK_LINKS, INSTAGRAM_LINKS, SALONS } from '../data/mdmData';

interface FooterProps {
  onOpenPrivacyPolicy?: () => void;
  onOpenCookiePolicy?: () => void;
  onOpenCookieSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyPolicy,
  onOpenCookiePolicy,
  onOpenCookieSettings,
}) => {
  return (
    <footer id="contact" className="bg-[#0d0d0d] text-white pt-20 pb-10 px-6 sm:px-12 border-t border-white/5 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="font-cormorant text-3xl font-bold tracking-[3px] text-white block">
              {MDM_INFO.brandName} <span className="text-[#b08d57] font-normal">{MDM_INFO.brandSuffix}</span>
            </a>
            <p className="text-stone-400 text-sm leading-relaxed font-light max-w-sm">
              Elegancja od 1996 roku. Oferujemy modę damską i męską na każdą uroczystość oraz własną pracownię poprawek krawieckich w Tucholi i Czersku.
            </p>

            {/* Direct Phone Highlight */}
            <div className="pt-2">
              <a
                href={`tel:${MDM_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 bg-[#1b1915] border border-[#b08d57]/60 hover:bg-[#b08d57] text-[#d4b483] hover:text-white px-4 py-2.5 rounded-xs transition-colors group cursor-pointer text-xs font-semibold uppercase tracking-wider"
              >
                <Phone size={14} className="stroke-[2.5]" />
                <span>Infolinia / Salony: {MDM_INFO.phoneDisplay}</span>
              </a>
            </div>

            <div className="flex gap-2.5 pt-2">
              <a
                href={INSTAGRAM_LINKS[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-stone-700 hover:border-[#d4b483] hover:bg-[#b08d57] text-white flex items-center justify-center transition-colors group"
                aria-label="Instagram Tuchola"
                title="Instagram Tuchola"
              >
                <Instagram size={17} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={INSTAGRAM_LINKS[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-stone-700 hover:border-[#d4b483] hover:bg-[#b08d57] text-white flex items-center justify-center transition-colors group"
                aria-label="Instagram Czersk"
                title="Instagram Czersk"
              >
                <Instagram size={17} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={FACEBOOK_LINKS[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-stone-700 hover:border-[#d4b483] hover:bg-[#b08d57] text-white flex items-center justify-center transition-colors group"
                aria-label="Facebook MDM"
                title="Facebook MDM"
              >
                <Facebook size={17} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Collections & Occasions */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-cormorant text-2xl font-medium text-white relative inline-block">
              Oferta & Okazje
              <span className="block w-8 h-[2px] bg-[#b08d57] mt-2"></span>
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase text-stone-400">
              <li>
                <a href="#collections" className="hover:text-[#b08d57] transition-colors">
                  Moda Męska
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#b08d57] transition-colors">
                  Moda Damska
                </a>
              </li>
              <li>
                <a href="#occasions" className="hover:text-[#d4b483] transition-colors flex items-center gap-1.5 text-stone-300">
                  <Sparkles size={11} className="text-[#b08d57]" />
                  <span>Śluby i Wesela</span>
                </a>
              </li>
              <li>
                <a href="#occasions" className="hover:text-[#b08d57] transition-colors">
                  Studniówki i Bale
                </a>
              </li>
              <li>
                <a href="#occasions" className="hover:text-[#b08d57] transition-colors">
                  Komunie i Chrzciny
                </a>
              </li>
            </ul>
          </div>

          {/* Services & Information */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-cormorant text-2xl font-medium text-white relative inline-block">
              Usługi & O nas
              <span className="block w-8 h-[2px] bg-[#b08d57] mt-2"></span>
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase text-stone-400">
              <li>
                <a href="#tailoring" className="hover:text-[#d4b483] transition-colors flex items-center gap-1.5 text-stone-300">
                  <Scissors size={11} className="text-[#b08d57]" />
                  <span>Poprawki krawieckie</span>
                </a>
              </li>
              <li>
                <a href="#tailoring" className="hover:text-[#b08d57] transition-colors">
                  Przeróbki własnych ubrań
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#b08d57] transition-colors">
                  O nas (30 lat tradycji)
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-[#b08d57] transition-colors">
                  Nasze salony
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-[#b08d57] transition-colors">
                  Strona główna
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-cormorant text-2xl font-medium text-white relative inline-block">
              Kontakt & Salony
              <span className="block w-8 h-[2px] bg-[#b08d57] mt-2"></span>
            </h4>

            {/* Direct Phone Click */}
            <div className="p-4 bg-[#161616] border border-[#b08d57]/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-stone-400">
                  Infolinia & Butik MDM:
                </span>
                <span className="text-[11px] text-[#d4b483] font-semibold">{MDM_INFO.phoneDisplay}</span>
              </div>
              <a
                href={`tel:${MDM_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#b08d57] hover:bg-[#c29f68] text-white py-3 px-4 text-xs font-semibold uppercase tracking-[1.5px] transition-colors shadow-md cursor-pointer"
              >
                <Phone size={14} className="stroke-[2.5]" />
                <span>Zadzwoń: {MDM_INFO.phoneShort}</span>
              </a>
            </div>

            <ul className="space-y-2 text-xs text-stone-300 font-light">
              {SALONS.map((salon) => (
                <li key={salon.id}>
                  <a
                    href={salon.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d4b483] transition-colors flex items-center justify-between group py-0.5"
                    title={`Jak dojechać do sklepu: ${salon.city}, ${salon.address}`}
                  >
                    <span>📍 {salon.address}, {salon.city}</span>
                    <span className="text-[#b08d57] group-hover:text-[#d4b483] text-[10px] uppercase tracking-wider ml-2 whitespace-nowrap underline">
                      Nawiguj →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Instagram links */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#d4b483] block mb-2 font-medium flex items-center gap-1.5">
                <Instagram size={13} />
                <span>Instagram:</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {INSTAGRAM_LINKS.map((insta, idx) => (
                  <a
                    key={idx}
                    href={insta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#d4b483]/50 hover:bg-[#b08d57] hover:border-[#b08d57] text-stone-200 hover:text-white text-[11px] py-2 px-3 text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Instagram size={12} className="text-[#d4b483]" />
                    <span>{insta.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Facebook direct buttons */}
            <div className="pt-1">
              <span className="text-[11px] uppercase tracking-wider text-stone-400 block mb-2 font-medium flex items-center gap-1.5">
                <Facebook size={13} />
                <span>Facebook:</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FACEBOOK_LINKS.map((fb, idx) => (
                  <a
                    key={idx}
                    href={fb.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/15 hover:bg-[#b08d57] hover:border-[#b08d57] text-stone-300 hover:text-white text-[11px] py-2 px-3 text-center transition-colors block"
                  >
                    {fb.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Email & hours */}
            <div className="pt-2">
              <a
                href={`mailto:${MDM_INFO.email}`}
                className="text-[#d4b483] hover:underline text-xs block break-all mb-2 font-medium"
              >
                ✉ {MDM_INFO.email}
              </a>
              <div className="text-stone-400 text-xs space-y-0.5">
                <p>🕐 {MDM_INFO.hoursWeekday}</p>
                <p>🕐 {MDM_INFO.hoursSaturday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} {MDM_INFO.fullName}. Wszelkie prawa zastrzeżone. | {MDM_INFO.experienceYears} lat elegancji
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] text-stone-400">
            {onOpenPrivacyPolicy && (
              <button
                onClick={onOpenPrivacyPolicy}
                className="hover:text-[#d4b483] transition-colors cursor-pointer underline-offset-2 hover:underline"
              >
                Polityka prywatności
              </button>
            )}
            {onOpenCookiePolicy && (
              <button
                onClick={onOpenCookiePolicy}
                className="hover:text-[#d4b483] transition-colors cursor-pointer underline-offset-2 hover:underline"
              >
                Polityka cookies
              </button>
            )}
            {onOpenCookieSettings && (
              <button
                onClick={onOpenCookieSettings}
                className="hover:text-[#d4b483] transition-colors cursor-pointer underline-offset-2 hover:underline flex items-center gap-1.5"
              >
                <Cookie size={12} className="text-[#b08d57]" />
                <span>Ustawienia cookies</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
