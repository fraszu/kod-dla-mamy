import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Cookie, Lock, Mail, MapPin } from 'lucide-react';
import { MDM_INFO } from '../data/mdmData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'cookies';
  onOpenCookieSettings?: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy',
  onOpenCookieSettings,
}) => {
  const [activeTab, setActiveTab] = React.useState<'privacy' | 'cookies'>(initialTab);

  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialTab]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#141414] text-white border border-[#b08d57]/30 shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-[#0e0e0e]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#b08d57]/20 border border-[#b08d57]/40 flex items-center justify-center text-[#d4b483]">
                  {activeTab === 'privacy' ? <ShieldCheck size={18} /> : <Cookie size={18} />}
                </div>
                <div>
                  <h2 className="font-cormorant text-2xl sm:text-3xl font-medium tracking-wide text-white">
                    {activeTab === 'privacy' ? 'Polityka Prywatności' : 'Polityka Plików Cookies'}
                  </h2>
                  <p className="text-xs text-stone-400 font-light">
                    MDM Moda Damsko-Męska • Zgodność z RODO i standardami UE
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-stone-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                aria-label="Zamknij"
              >
                <X size={18} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10 bg-[#161616] px-6 sm:px-8">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`py-3.5 px-4 text-xs font-semibold uppercase tracking-[1.5px] border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
                  activeTab === 'privacy'
                    ? 'border-[#b08d57] text-[#d4b483]'
                    : 'border-transparent text-stone-400 hover:text-white'
                }`}
              >
                <Lock size={14} />
                <span>Polityka Prywatności (RODO)</span>
              </button>
              <button
                onClick={() => setActiveTab('cookies')}
                className={`py-3.5 px-4 text-xs font-semibold uppercase tracking-[1.5px] border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
                  activeTab === 'cookies'
                    ? 'border-[#b08d57] text-[#d4b483]'
                    : 'border-transparent text-stone-400 hover:text-white'
                }`}
              >
                <Cookie size={14} />
                <span>Pliki Cookies</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 text-stone-300 text-xs sm:text-sm font-light leading-relaxed space-y-6">
              {activeTab === 'privacy' ? (
                <>
                  <section className="bg-white/5 p-4 border-l-2 border-[#b08d57]">
                    <p className="text-stone-300">
                      Szanujemy prywatność naszych Gości i Klientów. Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem z serwisu internetowego oraz salonów stacjonarnych <strong>MDM Moda Damsko-Męska</strong>.
                    </p>
                  </section>

                  <div>
                    <h3 className="font-cormorant text-xl text-white font-medium mb-2 flex items-center gap-2">
                      <span className="text-[#d4b483]">§ 1.</span> Administrator Danych Osobowych
                    </h3>
                    <p className="mb-2">
                      Administratorem danych osobowych jest:
                    </p>
                    <div className="bg-[#1a1a1a] p-3.5 border border-white/10 rounded space-y-1 text-xs text-stone-300">
                      <p className="font-medium text-white">MDM Moda Damsko-Męska</p>
                      <p className="flex items-center gap-2">
                        <MapPin size={13} className="text-[#d4b483]" />
                        <span>Salony: Plac Wolności 7 oraz 17, 89-500 Tuchola | ul. dr. Zielińskiego 3, 89-650 Czersk</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail size={13} className="text-[#d4b483]" />
                        <span>Kontakt e-mail: <a href={`mailto:${MDM_INFO.email}`} className="text-[#d4b483] underline">{MDM_INFO.email}</a></span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-cormorant text-xl text-white font-medium mb-2 flex items-center gap-2">
                      <span className="text-[#d4b483]">§ 2.</span> Podstawa prawna i cele przetwarzania danych
                    </h3>
                    <p className="mb-2">
                      Dane osobowe przetwarzane są zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO):
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-stone-300">
                      <li>
                        <strong className="text-white">Formularz Newslettera:</strong> Adres e-mail przetwarzany jest na podstawie dobrowolnej zgody (art. 6 ust. 1 lit. a RODO) w celu przesyłania informacji o nowych kolekcjach, promocjach i wydarzeniach.
                      </li>
                      <li>
                        <strong className="text-white">Kontakt telefoniczny lub e-mail:</strong> Przetwarzanie niezbędne do podjęcia działań na żądanie osoby, której dane dotyczą (art. 6 ust. 1 lit. b RODO) w celu odpowiedzi na zapytania o asortyment i rezerwacje.
                      </li>
                      <li>
                        <strong className="text-white">Prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO):</strong> Zapewnienie bezpieczeństwa strony, optymalizacja jej działania oraz obrona przed ewentualnymi roszczeniami.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-cormorant text-xl text-white font-medium mb-2 flex items-center gap-2">
                      <span className="text-[#d4b483]">§ 3.</span> Prawa osoby, której dane dotyczą
                    </h3>
                    <p className="mb-2">Każdemu użytkownikowi przysługuje prawo do:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-white/5 rounded border border-white/5">
                        <strong className="text-white block">Dostępu do danych</strong>
                        Możliwość uzyskania potwierdzenia i kopii przetwarzanych danych.
                      </div>
                      <div className="p-2.5 bg-white/5 rounded border border-white/5">
                        <strong className="text-white block">Sprostowania danych</strong>
                        Poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych.
                      </div>
                      <div className="p-2.5 bg-white/5 rounded border border-white/5">
                        <strong className="text-white block">Usunięcia danych („bycia zapomnianym”)</strong>
                        Żądania trwałego usunięcia danych w przypadkach określonych w RODO.
                      </div>
                      <div className="p-2.5 bg-white/5 rounded border border-white/5">
                        <strong className="text-white block">Wycofania zgody</strong>
                        Wycofania zgody na newsletter w dowolnym momencie bez wpływu na wcześniejsze przetwarzanie.
                      </div>
                    </div>
                    <p className="mt-2 text-stone-400 text-xs">
                      Przysługuje Państwu również prawo wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-cormorant text-xl text-white font-medium mb-2 flex items-center gap-2">
                      <span className="text-[#d4b483]">§ 4.</span> Okres przechowywania i odbiorcy danych
                    </h3>
                    <p>
                      Dane z newslettera przechowywane są do momentu wycofania zgody przez użytkownika. Dane kontaktowe z korespondencji przechowywane są przez czas niezbędny do obsługi zapytania. Państwa dane nie są sprzedawane ani przekazywane podmiotom trzecim w celach komercyjnych. Dostęp mogą mieć jedynie zaufani dostawcy usług IT (np. hosting) na podstawie umów powierzenia przetwarzania danych.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <section className="bg-white/5 p-4 border-l-2 border-[#b08d57]">
                    <p className="text-stone-300">
                      Nasz serwis wykorzystuje pliki cookies oraz podobne technologie w celu zapewnienia prawidłowego działania witryny, zapamiętania preferencji oraz analizy ruchu.
                    </p>
                  </section>

                  <div>
                    <h3 className="font-cormorant text-xl text-white font-medium mb-2 flex items-center gap-2">
                      <span className="text-[#d4b483]">§ 1.</span> Czym są pliki cookies?
                    </h3>
                    <p>
                      Pliki cookies to niewielkie pliki tekstowe zapisywane na urządzeniu końcowym użytkownika (komputerze, tablecie lub smartfonie) podczas przeglądania stron internetowych. Umożliwiają one m.in. poprawne wyświetlanie strony, nawigację oraz zachowanie ustawień użytkownika.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-cormorant text-xl text-white font-medium mb-3 flex items-center gap-2">
                      <span className="text-[#d4b483]">§ 2.</span> Rodzaje plików cookies stosowanych w witrynie
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-[#1a1a1a] p-4 border border-white/10 rounded">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            Cookies Niezbędne (Wymagane)
                          </span>
                          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-stone-300">Zawsze aktywne</span>
                        </div>
                        <p className="text-xs text-stone-300">
                          Są niezbędne do prawidłowego funkcjonowania strony internetowej, jej bezpieczeństwa oraz zapamiętania wyboru dotyczącego zgody na cookies. Nie można ich wyłączyć w naszych systemach.
                        </p>
                      </div>

                      <div className="bg-[#1a1a1a] p-4 border border-white/10 rounded">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#b08d57]"></span>
                            Cookies Funkcjonalne i Preferencyjne
                          </span>
                          <span className="text-[10px] bg-[#b08d57]/20 text-[#d4b483] px-2 py-0.5 rounded">Opcjonalne</span>
                        </div>
                        <p className="text-xs text-stone-300">
                          Umożliwiają zapamiętanie wybranych przez Użytkownika ustawień (np. język, rozmiar czcionki, preferencje widoku) i personalizację interfejsu.
                        </p>
                      </div>

                      <div className="bg-[#1a1a1a] p-4 border border-white/10 rounded">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#d4b483]"></span>
                            Cookies Analityczne i Statystyczne
                          </span>
                          <span className="text-[10px] bg-[#b08d57]/20 text-[#d4b483] px-2 py-0.5 rounded">Opcjonalne</span>
                        </div>
                        <p className="text-xs text-stone-300">
                          Pozwalają zbierać anonimowe informacje o sposobie korzystania z witryny (liczba odwiedzin, najpopularniejsze podstrony), co pomaga nam stale ulepszać jakość i wygodę serwisu.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-cormorant text-xl text-white font-medium mb-2 flex items-center gap-2">
                      <span className="text-[#d4b483]">§ 3.</span> Zarządzanie plikami cookies
                    </h3>
                    <p className="mb-3">
                      W każdej chwili mogą Państwo zmienić swoje preferencje dotyczące cookies na naszej stronie za pomocą panelu ustawień lub bezpośrednio w swojej przeglądarce internetowej (Chrome, Firefox, Safari, Edge):
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {onOpenCookieSettings && (
                        <button
                          onClick={() => {
                            onClose();
                            onOpenCookieSettings();
                          }}
                          className="bg-[#b08d57] hover:bg-[#c29f68] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[1.5px] transition-colors cursor-pointer"
                        >
                          Dostosuj preferencje cookies →
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-white/10 bg-[#0e0e0e] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-stone-400">
                Ostatnia aktualizacja: Wrzesień 2026 r.
              </span>
              <button
                onClick={onClose}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 text-xs font-semibold uppercase tracking-[1.5px] transition-colors cursor-pointer border border-white/15"
              >
                Rozumiem i zamykam
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
