import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Award, Info } from 'lucide-react';
import { getAssetUrl, cn } from '../lib/utils';

interface HeroSlide {
  image: string;
  isFlag?: boolean;
}

const HERO_SLIDES: HeroSlide[] = [
  { image: '/images/pan_con_lechon.jpg' },
  { image: '/images/cuban-flag.png', isFlag: true },
  { image: '/images/ropa_vieja.png' },
  { image: '/images/lechon_asado.jpg' },
  { image: '/images/tostones_montados.jpg' },
  { image: '/images/cuban_steak.jpg' },
  { image: '/images/bistec_encebollado.jpg' }
];

export const HeroBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section className="relative overflow-hidden bg-[#0a0f26] text-white py-6 sm:py-10 md:py-14 px-4 sm:px-6 lg:px-8 border-b border-[#1c275c]">
      {/* Animated Background Carousel */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1.0, ease: "easeInOut" }
            }}
            exit={{
              opacity: 0,
              transition: { duration: 1.0, ease: "easeInOut" }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src={getAssetUrl(currentSlide.image)}
              alt="Fondo gastronómico"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Capa de opacidad pareja sobre las fotos para legibilidad del texto */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 md:gap-2 bg-[#d61327]/20 text-[#fca5a5] border border-[#d61327]/40 px-2.5 py-0.5 md:px-3.5 md:py-1 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-2.5 md:mb-4 backdrop-blur-xs">
          <span>De cuba para el mundo entero</span>
        </div>

        {/* Main Title (Desktop original text-5xl lg:text-6xl) */}
        <h1 className="font-old-standard text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#fcfafa] mb-2.5 md:mb-4 drop-shadow-md">
          El Sabor Auténtico de La Habana
        </h1>

        {/* Subtitle (Desktop original text and font sizes) */}
        <p className="max-w-2xl mx-auto text-stone-100 text-xs sm:text-base lg:text-lg font-light leading-relaxed mb-3 md:mb-6 drop-shadow-xs">
          Bienvenido a nuestro menú virtual. Explora nuestras recetas históricas y más comunes de la isla, preparadas en el momento con ingredientes frescos y nuestra sazón de la casa.
        </p>

        {/* Highlights bar (Desktop/Tablet original - hidden on mobile) */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-stone-200">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 shadow-sm">
            <Utensils className="w-4 h-4 text-amber-400" />
            <span>Recetas de Familia</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 shadow-sm">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Platillos Seleccionados</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 shadow-sm">
            <Info className="w-4 h-4 text-amber-400" />
            <span>Presiona cualquier platillo para ver detalle</span>
          </div>
        </div>

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4 sm:mt-6">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                index === currentIndex
                  ? "w-6 bg-[#d61327]"
                  : "w-1.5 bg-white/30 hover:bg-white/60"
              )}
              aria-label={`Ir a diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
