import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Users, CheckCircle2, MessageCircle, Utensils, Sparkles, Wine } from 'lucide-react';
import type { Dish } from '../types/menu';
import { getWhatsAppDishUrl, getAssetUrl } from '../lib/utils';

interface DishModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, isOpen, onClose }) => {
  if (!dish) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            {/* Backdrop overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            {/* Modal Content container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 20 }}
                  transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
                  className="relative w-full max-w-lg md:max-w-4xl lg:max-w-5xl bg-[#fcfafa] rounded-3xl shadow-2xl overflow-hidden border border-stone-200/90 my-auto focus:outline-none max-h-[90vh] md:max-h-[85vh] flex flex-col md:flex-row"
                >
                  {/* Floating Close Button */}
                  <Dialog.Close asChild>
                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 z-30 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-black/50 md:bg-stone-100 hover:bg-black/70 md:hover:bg-stone-200 text-white md:text-stone-700 flex items-center justify-center transition-all duration-200 shadow-md border border-white/20 md:border-stone-200 active:scale-95 touch-manipulation"
                      aria-label="Cerrar ventana"
                    >
                      <X className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
                  </Dialog.Close>

                  {/* Left Column (Desktop) / Top Section (Mobile): Dish Image */}
                  <div className="relative w-full md:w-1/2 aspect-[16/10] md:aspect-auto md:min-h-[480px] lg:min-h-[520px] bg-stone-900 overflow-hidden shrink-0">
                    <img
                      src={getAssetUrl(dish.image)}
                      alt={dish.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-t md:from-black/30 md:via-transparent" />

                    {/* Floating Badge */}
                    {dish.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 bg-[#d61327] text-white text-xs lg:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow-lg border border-red-400/40">
                          <Sparkles className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-300" />
                          {dish.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Dish Info, Details & WhatsApp CTA */}
                  <div className="flex-1 overflow-y-auto p-5 sm:p-7 md:p-8 lg:p-9 flex flex-col justify-between space-y-6">
                    <div className="space-y-5 lg:space-y-6">
                      {/* Title & Price Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pr-8 md:pr-10">
                        <div>
                          <Dialog.Title className="font-old-standard text-[26px] sm:text-3xl lg:text-4xl font-extrabold leading-tight text-[#111942] tracking-tight [-webkit-text-stroke:0.5px_currentColor]">
                            {dish.name}
                          </Dialog.Title>
                          <Dialog.Description className="sr-only">
                            {dish.description}
                          </Dialog.Description>
                        </div>

                        {/* Price Tag */}
                        <div className="bg-[#111942] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-amber-400/30 flex items-baseline gap-1 shrink-0 self-start shadow-sm">
                          <span className="text-amber-400 text-sm lg:text-base font-bold">Q</span>
                          <span className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                            {dish.price.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Meta chips (Time, portion, tags) */}
                      <div className="flex flex-wrap items-center gap-2 lg:gap-2.5 text-sm">
                        {dish.prepTime && (
                          <span className="inline-flex items-center gap-1.5 bg-[#f4f6fa] text-[#111942] border border-stone-200 px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full font-medium text-xs lg:text-sm">
                            <Clock className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-[#d61327]" />
                            {dish.prepTime}
                          </span>
                        )}

                        {dish.portion && (
                          <span className="inline-flex items-center gap-1.5 bg-[#f4f6fa] text-[#111942] border border-stone-200 px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full font-medium text-xs lg:text-sm">
                            <Users className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-[#111942]" />
                            {dish.portion}
                          </span>
                        )}

                        {dish.tags?.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-amber-50 text-amber-900 border border-amber-200/80 px-3 py-1.5 lg:px-3.5 lg:py-2 rounded-full font-semibold text-xs lg:text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <div>
                        <h4 className="font-old-standard text-lg lg:text-xl font-bold text-[#111942] mb-1.5 lg:mb-2 flex items-center gap-2 lg:gap-2.5">
                          <Utensils className="w-4.5 h-4.5 lg:w-5 lg:h-5 text-[#d61327]" />
                          Sobre este platillo
                        </h4>
                        <p className="text-stone-800 text-base lg:text-lg leading-relaxed font-normal">
                          {dish.description}
                        </p>
                      </div>

                      {/* Ingredients list */}
                      {dish.ingredients && dish.ingredients.length > 0 && (
                        <div className="bg-[#f4f6fa] rounded-2xl p-4 sm:p-5 lg:p-6 border border-stone-200/80">
                          <h4 className="font-old-standard text-lg lg:text-xl font-bold text-[#111942] mb-3 lg:mb-3.5 flex items-center gap-2 lg:gap-2.5">
                            <CheckCircle2 className="w-4.5 h-4.5 lg:w-5 lg:h-5 text-[#d61327]" />
                            Ingredientes principales & elaboración
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 lg:gap-3 text-sm lg:text-base text-stone-800 font-medium">
                            {dish.ingredients.map((item, index) => (
                              <li key={index} className="flex items-start gap-2 lg:gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#d61327] mt-1.5 lg:mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Pairing recommendation */}
                      {dish.pairing && (
                        <div className="flex items-start gap-3 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 lg:p-5 text-sm lg:text-base text-amber-950">
                          <Wine className="w-5 h-5 lg:w-6 lg:h-6 text-amber-700 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold block text-amber-900 mb-0.5 text-sm lg:text-base">Sugerencia:</span>
                            <span className="font-normal text-stone-800 leading-relaxed text-sm lg:text-base">{dish.pairing}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer Actions & WhatsApp */}
                    <div className="pt-4 lg:pt-5 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs lg:text-sm text-stone-600 text-center sm:text-left">
                        <p className="font-semibold text-stone-700">Menú digital informativo</p>
                        <p>Para dudas o eventos, escríbenos directamente.</p>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <a
                          href={getWhatsAppDishUrl(dish.name, dish.price)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-base lg:text-lg px-6 py-3.5 lg:px-8 lg:py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 touch-manipulation"
                        >
                          <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 fill-white" />
                          <span>WhatsApp</span>
                        </a>

                        <button
                          type="button"
                          onClick={onClose}
                          className="px-5 py-3.5 lg:px-7 lg:py-4 rounded-2xl border border-stone-300 text-stone-700 hover:bg-stone-100 font-semibold text-base lg:text-lg transition-colors touch-manipulation active:scale-95"
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};
