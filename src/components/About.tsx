import React from 'react';
import { MDM_INFO } from '../data/mdmData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white px-6 sm:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Image with architectural gold frame */}
        <div className="relative order-2 lg:order-1">
          <div className="hidden sm:block absolute inset-0 translate-x-5 translate-y-5 border-2 border-[#b08d57] pointer-events-none z-0"></div>
          <div className="relative z-10 overflow-hidden shadow-xl bg-stone-100">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
              alt="Wnętrze salonu MDM Moda"
              className="w-full h-[450px] sm:h-[580px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 space-y-6">
          <span className="text-[#b08d57] text-xs uppercase tracking-[4px] font-semibold block">
            Nasza historia
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-medium text-[#111111] leading-tight">
            Elegancja od 1996 roku
          </h2>

          <div className="text-stone-600 text-sm sm:text-base leading-[1.9] space-y-4 font-light">
            <p>
              Od 1996 roku <strong>MDM Moda Damsko-Męska</strong> tworzy elegancję dla wymagających klientów. Przez trzy dekady zbudowaliśmy markę, która stała się synonimem jakości, prestiżu i ponadczasowego stylu.
            </p>
            <p>
              Każdy garnitur, każda sukienka i każda koszula w naszej ofercie jest starannie wyselekcjonowana. Stawiamy na naturalne materiały, wygodę oraz fasony, które pozostają aktualne przez wiele sezonów.
            </p>
            <p>
              Nasz doświadczony zespół stylistów z pasją pomaga dobrać idealną stylizację — od codziennych, biznesowych zestawów po najważniejsze uroczystości i wesela.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-200">
            {MDM_INFO.stats.map((stat, idx) => (
              <div key={idx} className="border-l-2 border-[#b08d57] pl-4">
                <div className="font-cormorant text-4xl font-semibold text-[#b08d57]">
                  {stat.number}
                </div>
                <div className="text-xs uppercase text-stone-500 tracking-wider mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
