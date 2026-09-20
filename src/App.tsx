import { useState, useMemo, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Utensils, SearchX, Sparkles } from 'lucide-react';
import dishesData from './data/dishes.json';
import type { Dish } from './types/menu';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategoryNav } from './components/CategoryNav';
import { DishCard } from './components/DishCard';
import { DishModal } from './components/DishModal';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CATEGORIES } from './data/categories';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const isInitialMount = useRef(true);

  // Posicionamiento en el menú al cambiar de categoría o realizar una búsqueda cuando se está abajo
  useLayoutEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const anchor = document.getElementById('menu-view-anchor');
    if (anchor) {
      const headerHeight =
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 53;
      const anchorTop = anchor.getBoundingClientRect().top + window.scrollY;
      const targetScroll = Math.max(0, anchorTop - headerHeight);

      // Si el usuario estaba abajo en los platillos/footer, fijar la vista en el menú/resultados
      if (window.scrollY > targetScroll + 20) {
        window.scrollTo(0, targetScroll);
      }
    }
  }, [selectedCategory, searchQuery]);

  const dishes = dishesData as Dish[];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      todos: dishes.length,
    };
    dishes.forEach((d) => {
      counts[d.category] = (counts[d.category] || 0) + 1;
    });
    return counts;
  }, [dishes]);

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesCategory =
        selectedCategory === 'todos' || dish.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const matchName = dish.name.toLowerCase().includes(query);
      const matchDesc = dish.description.toLowerCase().includes(query);
      const matchIngredients = dish.ingredients.some((ing) =>
        ing.toLowerCase().includes(query)
      );
      const matchTags = dish.tags?.some((t) => t.toLowerCase().includes(query));

      return matchName || matchDesc || matchIngredients || matchTags;
    });
  }, [dishes, selectedCategory, searchQuery]);

  const currentCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfafa] text-[#111942]">
      {/* Header */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Hero Banner with Cuban charm */}
      <HeroBanner />

      {/* Anchor to scroll directly to the category menu view */}
      <div id="menu-view-anchor" />

      {/* Sticky Category Navigation*/}
      <CategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => {
          setSelectedCategory(id);
          // If searching, we preserve or clear based on user flow
        }}
        categoryCounts={categoryCounts}
      />

      {/* Body / Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-5 lg:py-12 min-h-[50vh]">
        {/* Section title & count */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 lg:mb-8 border-b border-stone-200/80 pb-3 lg:pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d61327] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Nuestra Carta Virtual</span>
            </div>
            <h2 className="font-old-standard text-2xl sm:text-3xl font-bold text-[#111942] mt-1">
              {searchQuery
                ? `Resultados para "${searchQuery}"`
                : currentCategoryObj?.name || 'Platillos'}
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-stone-500 flex items-center gap-2">
            <span>
              Mostrando <strong className="text-[#111942] font-bold">{filteredDishes.length}</strong>{' '}
              {filteredDishes.length === 1 ? 'platillo' : 'platillos'}
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-[#d61327] font-semibold">Precios en Quetzales (Q)</span>
          </div>
        </div>

        {/* Dish Grid or Empty State: 2 columns on portrait mobile, 3 columns on landscape mobile & desktop */}
        {filteredDishes.length > 0 ? (
          <motion.div
            key={`${selectedCategory}-${searchQuery}`}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8"
          >
            {filteredDishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                onSelect={(selected) => setSelectedDish(selected)}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-stone-200 shadow-sm max-w-md mx-auto my-8">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4 text-stone-400">
              <SearchX className="w-8 h-8" />
            </div>
            <h3 className="font-old-standard text-xl font-bold text-[#111942] mb-2">
              No encontramos platillos
            </h3>
            <p className="text-stone-500 text-sm mb-6">
              No hay coincidencias para tu búsqueda "{searchQuery}". Intenta con otro ingrediente o categoría.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('todos');
              }}
              className="inline-flex items-center gap-2 bg-[#111942] hover:bg-[#1c275c] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <Utensils className="w-4 h-4" />
              <span>Ver todos los platillos</span>
            </button>
          </div>
        )}
      </main>

      {/* Dish Detail Modal (Radix UI + Framer Motion) */}
      <DishModal
        dish={selectedDish}
        isOpen={Boolean(selectedDish)}
        onClose={() => setSelectedDish(null)}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
