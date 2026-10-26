import React from 'react';
import { TAILORING_SERVICES, MDM_INFO } from '../data/mdmData';
import { Scissors, Phone, CheckCircle2, Sparkles } from 'lucide-react';

export const Tailoring: React.FC = () => {
  return (
    <section id="tailoring" className="py-24 sm:py-32 bg-[#141414] text-white px-6 sm:px-12 relative overflow-hidden scroll-mt-20">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#b08d57]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4b483] text-xs uppercase tracking-[4px] font-semibold block mb-3 flex items-center justify-center gap-1.5">
            <Scissors size={14} className="text-[#d4b483]" />
            <span>Usługi Krawieckie MDM</span>
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4">
            Poprawki krawieckie & drobne usługi
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Dobre ubranie to ubranie idealnie leżące na sylwetce. Wykonujemy precyzyjne poprawki krawieckie naszych kolekcji, a także z przyjemnością przyjmujemy <strong>Twoje własne ubrania z szafy</strong> na drobne przeróbki!
          </p>
        </div>

        {/* Highlight Banner: Twoje własne ubrania */}
        <div className="mb-14 p-6 sm:p-8 bg-gradient-to-r from-[#211a12] via-[#2a2217] to-[#1c1813] border border-[#b08d57]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#b08d57]/20 border border-[#b08d57] flex items-center justify-center text-[#d4b483] shrink-0 mt-1">
              <Sparkles size={22} />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[2px] font-semibold text-[#d4b483]">
                Usługa otwarta dla każdego
              </span>
              <h3 className="font-cormorant text-2xl sm:text-3xl font-medium text-white">
                Możesz przynieść do nas swoje ubrania z szafy!
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-light max-w-2xl">
                Kupiłeś spodnie w innym sklepie albo Twoje ulubione dżinsy wymagają skrócenia? Zamek w kurtce odmówił posłuszeństwa? Przynieś je do salonu MDM — zajmiemy się nimi szybko i profesjonalnie.
              </p>
            </div>
          </div>

          <a
            href={`tel:${MDM_INFO.phoneRaw}`}
            className="shrink-0 inline-flex items-center gap-2 bg-[#b08d57] hover:bg-[#d4b483] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] transition-colors shadow-lg cursor-pointer"
          >
            <Phone size={14} />
            <span>Zadzwoń: {MDM_INFO.phoneShort}</span>
          </a>
        </div>

        {/* 3 Pillars of Tailoring Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TAILORING_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="bg-[#1c1c1c] p-8 border border-white/10 hover:border-[#b08d57]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="text-3xl mb-4">{serv.icon}</div>
                <h3 className="font-cormorant text-2xl sm:text-3xl font-medium text-white mb-3 group-hover:text-[#d4b483] transition-colors">
                  {serv.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {serv.description}
                </p>

                {/* Example points */}
                <div className="border-t border-white/10 pt-4 space-y-2.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
                    Zakres prac:
                  </span>
                  <ul className="space-y-2 text-xs text-stone-300 font-light">
                    {serv.examples.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#d4b483] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-5 border-t border-white/10">
                  <a
                    href={`tel:${MDM_INFO.phoneRaw}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-white/5 hover:bg-[#b08d57] hover:text-white text-[#d4b483] text-xs font-medium uppercase tracking-wider border border-white/10 transition-colors"
                  >
                    <Phone size={13} className="stroke-[2.5]" />
                    <span>Zadzwoń: {MDM_INFO.phoneShort}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="p-8 bg-[#181818] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-cormorant text-2xl font-medium text-white">
              Chcesz skonsultować poprawkę lub zapytać o cenę i czas realizacji?
            </h4>
            <p className="text-stone-400 text-xs sm:text-sm font-light">
              Nasz zespół chętnie doradzi telefonicznie lub bezpośrednio w salonach w Tucholi i Czersku.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${MDM_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#b08d57] hover:bg-[#c29f68] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] transition-colors shadow-md cursor-pointer"
            >
              <Phone size={15} className="stroke-[2.5]" />
              <span>Zadzwoń: {MDM_INFO.phoneShort}</span>
            </a>
            <a
              href="#locations"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-stone-200 hover:text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] transition-colors cursor-pointer"
            >
              <span>Zobacz adresy salonów</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
