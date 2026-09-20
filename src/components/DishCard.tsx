import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Eye, Clock, Sparkles } from 'lucide-react';
import type { Dish } from '../types/menu';
import { cn, getAssetUrl } from '../lib/utils';

interface DishCardProps {
  dish: Dish;
  onSelect: (dish: Dish) => void;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
};

export const DishCard: React.FC<DishCardProps> = ({ dish, onSelect }) => {
  const getBadgeClass = (type?: 'red' | 'blue' | 'gold') => {
    switch (type) {
      case 'red':
        return 'bg-[#d61327] text-white border-[#d61327]';
      case 'blue':
        return 'bg-[#111942] text-white border-[#111942]';
      case 'gold':
      default:
        return 'bg-[#c89540] text-white border-[#c89540]';
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => onSelect(dish)}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Image Container with Zoom effect: aspect-square on mobile (portrait & landscape), aspect-[4/3] on desktop */}
      <div className="relative aspect-square lg:aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <img
          src={getAssetUrl(dish.image)}
          alt={dish.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient overlay on hover (Desktop only) */}
        <div className="hidden lg:flex absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end justify-between p-3">
          <span className="text-white text-xs font-medium flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <Eye className="w-3.5 h-3.5 text-amber-300" />
            Ver detalles del platillo
          </span>
        </div>

        {/* Badge */}
        {dish.badge && (
          <div className="absolute top-2 left-2 lg:top-3 lg:left-3 z-10">
            <span
              className={cn(
                "inline-flex items-center gap-1 text-[9px] lg:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-md shadow-md border",
                getBadgeClass(dish.badgeType)
              )}
            >
              <Sparkles className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-amber-300" />
              {dish.badge}
            </span>
          </div>
        )}

        {/* Prep time chip (Desktop only) */}
        {dish.prepTime && (
          <div className="hidden lg:block absolute bottom-3 right-3 z-10 group-hover:opacity-0 transition-opacity">
            <span className="bg-black/60 backdrop-blur-md text-white text-[11px] px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
              <Clock className="w-3 h-3 text-amber-300" />
              {dish.prepTime}
            </span>
          </div>
        )}
      </div>

      {/* Content: compact padding on mobile (portrait & landscape), p-5 on desktop */}
      <div className="p-2.5 lg:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Dish title: prominent on mobile (text-lg / 18px), text-lg lg:text-xl on desktop */}
          <h3 className="font-old-standard text-lg sm:text-xl lg:text-xl font-bold text-[#111942] group-hover:text-[#d61327] transition-colors leading-snug line-clamp-2 mb-1.5 lg:mb-2">
            {dish.name}
          </h3>

          {/* Tags preview (Desktop only) */}
          {dish.tags && dish.tags.length > 0 && (
            <div className="hidden lg:flex flex-wrap gap-1.5 mb-3">
              {dish.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Price & Action Footer */}
        <div className="pt-2 lg:pt-3 border-t border-stone-100 flex items-center justify-between gap-1 mt-auto">
          <div className="flex flex-col">
            <span className="hidden lg:block text-[11px] uppercase tracking-wider text-stone-400 font-semibold">Precio</span>
            <div className="flex items-baseline gap-0.5 lg:gap-1">
              <span className="text-sm font-bold text-[#d61327]">Q</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-black text-[#111942] tracking-tight">
                {dish.price.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Mobile action button (portrait & landscape mobile) */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center gap-1 text-xs font-semibold text-white bg-[#d61327] active:scale-95 px-2.5 py-1.5 rounded-lg shadow-xs shrink-0"
          >
            <span>Ver</span>
            <Eye className="w-3 h-3" />
          </button>

          {/* Desktop action button */}
          <button
            type="button"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-[#111942] bg-[#f4f6fa] group-hover:bg-[#d61327] group-hover:text-white px-3.5 py-2 rounded-xl transition-colors duration-200 shadow-sm"
          >
            <span>Ver detalle</span>
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};
