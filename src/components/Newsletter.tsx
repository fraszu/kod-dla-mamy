import React, { useState, useRef } from 'react';
import { CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

interface NewsletterProps {
  onOpenPrivacyPolicy?: () => void;
}

// Simple email regex RFC 5322 approximation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Newsletter: React.FC<NewsletterProps> = ({ onOpenPrivacyPolicy }) => {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Hidden trap for automated bots
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Anti-bot time check (bots submit immediately)
  const formLoadTime = useRef<number>(Date.now());
  const lastSubmitTime = useRef<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // 1. Honeypot check: If the hidden input is filled, it's an automated bot
    if (honeypot.trim() !== '') {
      // Silently pretend success to deceive the bot without polluting our database
      setIsSubscribed(true);
      return;
    }

    // 2. Time-trap check: If submitted faster than 800ms, likely a bot
    const elapsed = Date.now() - formLoadTime.current;
    if (elapsed < 800) {
      setIsSubscribed(true); // Ignore bot silently
      return;
    }

    // 3. Rate limiting check: Prevent spamming / multiple submits in under 8 seconds
    const now = Date.now();
    if (now - lastSubmitTime.current < 8000) {
      setErrorMessage('Prosimy odczekać chwilę przed kolejną próbą.');
      return;
    }

    const trimmed = email.trim();

    // 4. Input Sanitization & length check
    if (!trimmed || trimmed.length > 100) {
      setErrorMessage('Wprowadzony adres e-mail jest nieprawidłowy (zbyt długi).');
      return;
    }

    // 5. Strict format verification
    if (!EMAIL_REGEX.test(trimmed)) {
      setErrorMessage('Proszę podać poprawny adres e-mail (np. jan@domena.pl).');
      return;
    }

    // 6. XSS / Script injection guard
    if (/[<>{}]/.test(trimmed)) {
      setErrorMessage('Wykryto niedozwolone znaki w formularzu.');
      return;
    }

    setIsSubmitting(true);
    lastSubmitTime.current = now;

    // Simulate safe processing & persist to local storage safely
    try {
      const stored = JSON.parse(localStorage.getItem('mdm_subscribers') || '[]');
      const alreadySubscribed = stored.some((item: { email: string }) => item.email.toLowerCase() === trimmed.toLowerCase());
      
      if (!alreadySubscribed) {
        // Sanitize string before storing
        const cleanEmail = trimmed.replace(/[^\w.@+-]/gi, '');
        stored.push({
          email: cleanEmail,
          date: new Date().toISOString(),
        });
        localStorage.setItem('mdm_subscribers', JSON.stringify(stored.slice(-100))); // keep max 100
      }

      setIsSubscribed(true);
      setEmail('');
    } catch {
      setIsSubscribed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-28 sm:py-36 px-6 text-center text-white bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url("https://images.unsplash.com/photo-1445205170230-053b83016050?w=1800")`,
      }}
    >
      <div className="max-w-2xl mx-auto space-y-4">
        <span className="text-[#d4b483] text-xs uppercase tracking-[4px] font-semibold block">
          MDM Newsletter
        </span>

        <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-medium text-white">
          Bądź na bieżąco
        </h2>

        <p className="text-stone-300 text-sm sm:text-base font-light max-w-lg mx-auto">
          Zapisz się i otrzymuj informacje o nowościach, premierach kolekcji oraz wyjątkowych okazjach.
        </p>

        {isSubscribed ? (
          <div className="p-6 bg-[#b08d57]/20 border border-[#b08d57] text-white rounded text-sm mt-6 font-medium animate-fadeIn space-y-2 max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-2 text-[#d4b483]">
              <CheckCircle size={20} />
              <span className="text-base font-semibold">Dziękujemy za zapis!</span>
            </div>
            <p className="text-stone-300 text-xs sm:text-sm font-light">
              Twój adres został pomyślnie dodany do listy. Będziemy informować Cię o nowościach i wyjątkowych kolekcjach.
            </p>
          </div>
        ) : (
          <div className="pt-4">
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-900/60 border border-red-500/50 text-red-200 text-xs flex items-center justify-center gap-2 rounded max-w-xl mx-auto animate-fadeIn">
                <AlertTriangle size={15} className="shrink-0 text-red-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form
              id="newsletterForm"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto shadow-2xl relative"
            >
              {/* Honeypot Trap - invisible to users, bots fill it automatically */}
              <input
                type="text"
                name="website_verification_trap"
                id="website_verification_trap"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="opacity-0 absolute -top-[9999px] left-0 h-0 w-0 pointer-events-none -z-50"
              />

              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój adres e-mail"
                required
                maxLength={100}
                disabled={isSubmitting}
                className="flex-1 px-6 py-4.5 bg-white text-[#111111] text-sm focus:outline-none placeholder-stone-400 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#b08d57] hover:bg-[#d4b483] text-white px-9 py-4.5 text-xs font-semibold uppercase tracking-[2px] transition-colors cursor-pointer shrink-0 disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Wysyłanie...' : 'Zapisz się'}
              </button>
            </form>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 max-w-xl mx-auto mt-3 text-[11px] text-stone-400 font-light">
              <p>
                Zapisując się, akceptujesz przetwarzanie danych zgodnie z{' '}
                {onOpenPrivacyPolicy ? (
                  <button
                    type="button"
                    onClick={onOpenPrivacyPolicy}
                    className="text-[#d4b483] underline hover:text-white transition-colors cursor-pointer"
                  >
                    Polityką Prywatności
                  </button>
                ) : (
                  <span className="text-[#d4b483]">Polityką Prywatności</span>
                )}
                .
              </p>

              <div className="flex items-center gap-1.5 text-stone-400 shrink-0">
                <ShieldCheck size={13} className="text-[#d4b483]" />
                <span className="text-[10px] tracking-wide">Bezpieczne szyfrowanie SSL</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
