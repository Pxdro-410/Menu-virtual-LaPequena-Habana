import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Eye, Clock, Sparkles } from 'lucide-react';
import type { Dish } from '../types/menu';
import { cn } from '../lib/utils';

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
      {/* Image Container with Zoom effect */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
          <span className="text-white text-xs font-medium flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <Eye className="w-3.5 h-3.5 text-amber-300" />
            Ver detalles del platillo
          </span>
        </div>

        {/* Badge */}
        {dish.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={cn(
                "inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md border",
                getBadgeClass(dish.badgeType)
              )}
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              {dish.badge}
            </span>
          </div>
        )}

        {/* Prep time chip */}
        {dish.prepTime && (
          <div className="absolute bottom-3 right-3 z-10 group-hover:opacity-0 transition-opacity">
            <span className="bg-black/60 backdrop-blur-md text-white text-[11px] px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
              <Clock className="w-3 h-3 text-amber-300" />
              {dish.prepTime}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Dish title */}
          <h3 className="font-old-standard text-lg sm:text-xl font-bold text-[#111942] group-hover:text-[#d61327] transition-colors leading-snug line-clamp-1 mb-2">
            {dish.name}
          </h3>

          {/* Description preview */}
          <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4 font-normal">
            {dish.description}
          </p>

          {/* Tags preview */}
          {dish.tags && dish.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
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
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">Precio</span>
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-bold text-[#d61327]">Q</span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#111942] tracking-tight">
                {dish.price.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111942] bg-[#f4f6fa] group-hover:bg-[#d61327] group-hover:text-white px-3.5 py-2 rounded-xl transition-colors duration-200 shadow-sm"
          >
            <span>Ver detalle</span>
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};
