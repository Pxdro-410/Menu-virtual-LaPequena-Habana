import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  UtensilsCrossed,
  Flame,
  Sandwich,
  Sparkles,
  Salad,
  CakeSlice,
  GlassWater,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { cn } from '../lib/utils';

interface CategoryNavProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  categoryCounts: Record<string, number>;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  UtensilsCrossed,
  Flame,
  Sandwich,
  Sparkles,
  Salad,
  CakeSlice,
  GlassWater,
  Layers
};

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (catId: string) => {
    const anchor = document.getElementById('menu-view-anchor');
    const headerHeight =
      parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 53;

    const anchorTop = anchor ? anchor.getBoundingClientRect().top + window.scrollY : 0;
    const targetScroll = Math.max(0, anchorTop - headerHeight);
    const isFar = Math.abs(window.scrollY - targetScroll) > 400;

    if (isFar) {
      // Al estar muy abajo, saltar de inmediato al objetivo antes de cambiar de categoría.
      // Esto previene que la reducción repentina de altura del DOM en celulares cancele el scroll
      // y deje al usuario atrapado en el footer.
      window.scrollTo(0, targetScroll);
      onSelectCategory(catId);
    } else {
      onSelectCategory(catId);
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }

    // Doble verificación en el siguiente cuadro de animación tras el render de React
    requestAnimationFrame(() => {
      window.scrollTo(0, targetScroll);
    });
  };

  return (
    <nav
      className="sticky z-30 bg-[#fcfafa]/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm py-2.5 sm:py-2.5 transition-all"
      style={{ top: 'var(--header-height, 53px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center">

        {/* Left scroll chevron */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-2 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-stone-200 items-center justify-center text-stone-600 hover:text-[#111942] hover:bg-stone-50 transition-colors"
          aria-label="Desplazar categorías a la izquierda"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scrollable category list */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 md:px-8 scroll-smooth w-full"
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const IconComponent = iconMap[cat.iconName] || UtensilsCrossed;
            const count = categoryCounts[cat.id] ?? 0;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2.5 sm:py-2 rounded-full text-[13px] sm:text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer",
                  isSelected
                    ? "text-white shadow-sm"
                    : "text-stone-800 hover:text-[#111942] bg-stone-200/90 hover:bg-stone-300 border border-stone-300/80 shadow-2xs"
                )}
              >
                {/* Framer motion active background */}
                {isSelected && (
                  <motion.div
                    layoutId="categoryPill"
                    className="absolute inset-0 bg-[#111942] rounded-full"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-1.5">
                  <IconComponent className={cn("w-4 h-4", isSelected ? "text-amber-400" : "text-stone-600")} />
                  <span>{cat.shortName}</span>
                  {count > 0 && (
                    <span
                      className={cn(
                        "ml-1 text-[11px] px-1.5 py-0.2 rounded-full font-semibold",
                        isSelected
                          ? "bg-[#d61327] text-white"
                          : "bg-stone-300 text-stone-700"
                      )}
                    >
                      {count}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right scroll chevron */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-2 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-stone-200 items-center justify-center text-stone-600 hover:text-[#111942] hover:bg-stone-50 transition-colors"
          aria-label="Desplazar categorías a la derecha"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>
    </nav>
  );
};
