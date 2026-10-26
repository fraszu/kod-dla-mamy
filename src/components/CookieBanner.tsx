import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, Check, Settings2, X } from 'lucide-react';

export interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  savedAt: string;
}

interface CookieBannerProps {
  onOpenPrivacyPolicy: () => void;
  onOpenCookiePolicy: () => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'mdm_cookie_consent_v1';

export const CookieBanner: React.FC<CookieBannerProps> = ({
  onOpenPrivacyPolicy,
  onOpenCookiePolicy,
  isSettingsOpen,
  setIsSettingsOpen,
}) => {
  const [hasConsent, setHasConsent] = useState<boolean>(true); // default true to avoid flash before check
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    functional: true,
    analytics: true,
    savedAt: '',
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CookiePreferences;
        setPreferences(parsed);
        setHasConsent(true);
      } else {
        setHasConsent(false);
      }
    } catch {
      setHasConsent(false);
    }
  }, []);

  const saveConsent = (prefs: { functional: boolean; analytics: boolean }) => {
    const fullPrefs: CookiePreferences = {
      essential: true,
      functional: prefs.functional,
      analytics: prefs.analytics,
      savedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fullPrefs));
    } catch {
      // ignore
    }
    setPreferences(fullPrefs);
    setHasConsent(true);
    setIsSettingsOpen(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ functional: true, analytics: true });
  };

  const handleRejectOptional = () => {
    saveConsent({ functional: false, analytics: false });
  };

  const handleSaveCustom = () => {
    saveConsent({
      functional: preferences.functional,
      analytics: preferences.analytics,
    });
  };

  return (
    <>
      {/* INITIAL BANNER (if consent hasn't been given yet and settings not explicitly open) */}
      <AnimatePresence>
        {!hasConsent && !isSettingsOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none"
          >
            <div className="max-w-5xl mx-auto bg-[#141414]/95 backdrop-blur-md text-white border border-[#b08d57]/40 shadow-2xl p-5 sm:p-7 rounded-sm pointer-events-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {/* Icon & Text */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#b08d57]/20 border border-[#b08d57]/50 text-[#d4b483] flex items-center justify-center shrink-0 mt-0.5">
                  <Cookie size={20} />
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <h3 className="font-cormorant text-xl sm:text-2xl font-medium tracking-wide text-white">
                    Szanujemy Twoją prywatność
                  </h3>
                  <p className="text-stone-300 font-light leading-relaxed max-w-2xl text-xs sm:text-sm">
                    Używamy plików cookies w celu zapewnienia prawidłowego działania strony, zapamiętania preferencji oraz do anonimowych analiz statystycznych. Możesz zaakceptować wszystkie pliki cookies, wybrać tylko niezbędne lub dostosować swoje zgody.{' '}
                    <button
                      onClick={onOpenCookiePolicy}
                      className="text-[#d4b483] underline hover:text-white transition-colors cursor-pointer"
                    >
                      Dowiedz się więcej w Polityce Cookies
                    </button>
                    .
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0 justify-end">
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="flex-1 sm:flex-initial px-4 py-2.5 bg-white/10 hover:bg-white/20 text-stone-200 text-xs font-semibold uppercase tracking-[1.5px] transition-colors border border-white/15 text-center cursor-pointer"
                >
                  Dostosuj
                </button>
                <button
                  onClick={handleRejectOptional}
                  className="flex-1 sm:flex-initial px-4 py-2.5 bg-transparent hover:bg-white/10 text-stone-300 text-xs font-semibold uppercase tracking-[1.5px] transition-colors border border-white/25 text-center cursor-pointer"
                >
                  Tylko niezbędne
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#b08d57] hover:bg-[#c29f68] text-white text-xs font-semibold uppercase tracking-[1.5px] transition-colors shadow-lg text-center cursor-pointer"
                >
                  Akceptuj wszystkie
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DETAILED SETTINGS MODAL */}
      <AnimatePresence>
        {isSettingsOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSettingsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-[#141414] text-white border border-[#b08d57]/40 shadow-2xl z-10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0e0e0e]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#b08d57]/20 border border-[#b08d57]/40 flex items-center justify-center text-[#d4b483]">
                    <Settings2 size={16} />
                  </div>
                  <h3 className="font-cormorant text-2xl font-medium tracking-wide text-white">
                    Ustawienia prywatności i cookies
                  </h3>
                </div>
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-stone-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                  aria-label="Zamknij"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm font-light text-stone-300">
                <p>
                  Dostosuj swoje preferencje dotyczące plików cookies. Wybierz, na które kategorie wyrażasz zgodę. Szczegółowe zasady opisuje nasza{' '}
                  <button
                    onClick={() => {
                      setIsSettingsOpen(false);
                      onOpenPrivacyPolicy();
                    }}
                    className="text-[#d4b483] underline hover:text-white cursor-pointer"
                  >
                    Polityka Prywatności
                  </button>
                  .
                </p>

                {/* Categories */}
                <div className="space-y-3 pt-2">
                  {/* Essential */}
                  <div className="p-4 bg-[#1a1a1a] border border-white/10 rounded flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white text-xs uppercase tracking-wider">
                          1. Pliki niezbędne (Techniczne)
                        </span>
                        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-stone-300">
                          Wymagane
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 font-light">
                        Konieczne do prawidłowego działania witryny, bezpieczeństwa oraz zapisania preferencji użytkownika.
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center gap-1.5 text-xs text-emerald-400 font-medium py-1 px-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded">
                      <Check size={12} />
                      <span>Zawsze aktywne</span>
                    </div>
                  </div>

                  {/* Functional */}
                  <div className="p-4 bg-[#1a1a1a] border border-white/10 rounded flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white text-xs uppercase tracking-wider">
                          2. Pliki funkcjonalne
                        </span>
                        <span className="text-[10px] bg-[#b08d57]/20 text-[#d4b483] px-2 py-0.5 rounded">
                          Opcjonalne
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 font-light">
                        Umożliwiają zapamiętywanie indywidualnych preferencji i ustawień interfejsu (np. zapisane filtry, wybrane slajdy).
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) =>
                          setPreferences({ ...preferences, functional: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-stone-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#b08d57]"></div>
                    </label>
                  </div>

                  {/* Analytics */}
                  <div className="p-4 bg-[#1a1a1a] border border-white/10 rounded flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white text-xs uppercase tracking-wider">
                          3. Pliki analityczne i statystyczne
                        </span>
                        <span className="text-[10px] bg-[#b08d57]/20 text-[#d4b483] px-2 py-0.5 rounded">
                          Opcjonalne
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 font-light">
                        Pozwalają anonimowo mierzyć ruch na stronie i badać zachowania odwiedzających, aby poprawiać komfort przeglądania.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({ ...preferences, analytics: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-stone-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#b08d57]"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-6 py-4 border-t border-white/10 bg-[#0e0e0e] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={handleRejectOptional}
                  className="px-4 py-2.5 text-xs text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Odrzuć opcjonalne
                </button>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handleSaveCustom}
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-[1.5px] border border-white/15 transition-colors cursor-pointer"
                  >
                    Zapisz preferencje
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2.5 bg-[#b08d57] hover:bg-[#c29f68] text-white text-xs font-semibold uppercase tracking-[1.5px] transition-colors shadow-md cursor-pointer"
                  >
                    Zezwól na wszystkie
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
