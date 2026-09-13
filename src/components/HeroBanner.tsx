import React from 'react';
import { Utensils, Award, Info } from 'lucide-react';
import { getAssetUrl } from '../lib/utils';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#000000] via-[#16204f] to-[#000000] text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-[#1c275c]">
      {/* Decorative background subtle glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#d61327]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#fcfafa]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Cuban Flag diffused watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <img
          src={getAssetUrl('/images/cuban-flag.png')}
          alt="Bandera de Cuba"
          className="w-full max-w-4xl h-full object-contain opacity-[0.15] scale-200 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#d61327]/20 text-[#fca5a5] border border-[#d61327]/40 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">

          <span>De cuba para el mundo entero</span>

        </div>

        {/* Main Title */}
        <h1 className="font-old-standard text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#fcfafa] mb-4 drop-shadow-md">
          El Sabor Auténtico de La Habana
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-stone-100 text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-6">
          Bienvenido a nuestro menú virtual. Explora nuestras recetas históricas y más comunes de la isla, preparadas en el momento con ingredientes frescos y nuestra sazón de la casa.
        </p>

        {/* Highlights bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-stone-200">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
            <Utensils className="w-4 h-4 text-amber-400" />
            <span>Recetas de Familia</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Platillos Seleccionados</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
            <Info className="w-4 h-4 text-amber-400" />
            <span>Presiona cualquier platillo para ver detalle</span>
          </div>
        </div>
      </div>
    </section>
  );
};
