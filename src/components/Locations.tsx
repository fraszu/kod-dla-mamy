import React from 'react';
import { MapPin, Clock, ExternalLink, Phone, Scissors } from 'lucide-react';
import { SALONS, MDM_INFO } from '../data/mdmData';

export const Locations: React.FC = () => {
  return (
    <section id="locations" className="relative py-24 sm:py-32 bg-[#f7f5f0] px-6 sm:px-12 scroll-mt-20">
      <span id="salony" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#b08d57] text-xs uppercase tracking-[4px] font-semibold block mb-3">
            Odwiedź nas
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-medium text-[#111111] mb-4">
            Nasze salony
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Zapraszamy do naszych butików w Tucholi i Czersku. Zobacz godziny otwarcia, zadzwoń przed wizytą lub wyznacz trasę dojazdu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SALONS.map((salon) => (
            <div
              key={salon.id}
              className="bg-white p-8 sm:p-9 text-left shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5 flex flex-col justify-between group border border-stone-200/80"
            >
              <div>
                {/* Header with city and department */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#f7f5f0] border border-stone-200 flex items-center justify-center text-[#b08d57] shrink-0 group-hover:bg-[#b08d57] group-hover:text-white transition-colors">
                    <MapPin size={18} />
                  </div>
                  <span className="inline-block px-3 py-1 bg-stone-100 text-stone-700 text-[11px] font-medium uppercase tracking-wider rounded-full">
                    {salon.department}
                  </span>
                </div>

                <h3 className="font-cormorant text-3xl font-medium text-[#111111] mb-1 group-hover:text-[#b08d57] transition-colors">
                  {salon.city}
                </h3>
                <p className="text-stone-700 text-sm font-medium mb-3">
                  {salon.address}
                </p>

                {/* Direct Phone Line */}
                <div className="mb-5">
                  <a
                    href={`tel:${salon.phoneRaw || MDM_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#b08d57] hover:text-[#111111] transition-colors"
                  >
                    <Phone size={13} className="stroke-[2.5]" />
                    <span>Tel: {salon.phone || MDM_INFO.phoneDisplay}</span>
                  </a>
                </div>

                {/* Opening Hours Section */}
                <div className="border-t border-b border-stone-200/80 py-5 my-4 bg-stone-50/60 -mx-8 sm:-mx-9 px-8 sm:px-9">
                  <div className="flex items-center gap-2 mb-3.5">
                    <Clock size={15} className="text-[#b08d57]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#111111]">
                      Godziny otwarcia
                    </span>
                  </div>

                  <dl className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <dt className="text-stone-600 font-normal">Poniedziałek – Piątek</dt>
                      <dd className="font-semibold text-stone-900">{salon.openingHours.weekday}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-stone-600 font-normal">Sobota</dt>
                      <dd className="font-semibold text-stone-900">{salon.openingHours.saturday}</dd>
                    </div>
                    <div className="flex items-center justify-between text-stone-400">
                      <dt className="font-light">Niedziela</dt>
                      <dd className="font-medium text-stone-500">{salon.openingHours.sunday}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-2.5">
                <a
                  href={`tel:${salon.phoneRaw || MDM_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#b08d57] hover:bg-[#c29f68] text-white text-xs font-semibold uppercase tracking-[1.5px] py-3.5 px-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <Phone size={14} className="stroke-[2.5]" />
                  <span>Zadzwoń: {MDM_INFO.phoneShort}</span>
                </a>

                <a
                  href={salon.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-stone-800 text-white px-5 py-3 text-xs font-semibold uppercase tracking-[1.5px] transition-all duration-300 shadow-sm cursor-pointer group/btn"
                >
                  <span>Jak dojechać do sklepu</span>
                  <ExternalLink size={13} className="text-[#d4b483] group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tailoring note banner */}
        <div className="mt-12 p-6 bg-white border border-[#b08d57]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#f7f5f0] border border-[#b08d57]/40 flex items-center justify-center text-[#b08d57] shrink-0 mx-auto sm:mx-0">
              <Scissors size={18} />
            </div>
            <div>
              <h4 className="font-cormorant text-xl font-medium text-[#111111]">
                Potrzebujesz skrócić spodnie lub dopasować ubranie?
              </h4>
              <p className="text-stone-500 text-xs font-light">
                Dopasowujemy ubrania kupione u nas, ale możesz też przynieść <strong>swoje własne rzeczy z szafy</strong> na drobne poprawki krawieckie!
              </p>
            </div>
          </div>

          <a
            href="#tailoring"
            className="shrink-0 text-xs font-semibold uppercase tracking-[1.5px] text-[#b08d57] hover:text-[#111111] transition-colors underline underline-offset-4"
          >
            Dowiedz się więcej o poprawkach →
          </a>
        </div>
      </div>
    </section>
  );
};
