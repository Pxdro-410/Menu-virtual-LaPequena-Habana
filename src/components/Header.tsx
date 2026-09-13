import React from 'react';
import { Search, X, MessageCircle, MapPin, Clock } from 'lucide-react';
import { getWhatsAppGeneralUrl } from '../lib/utils';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="w-full bg-[#111942] text-[#fcfafa] border-b border-[#1c275c] shadow-md transition-all sticky top-0 z-40">
      {/* Top micro banner */}
      <div className="bg-[#0a0f28] py-1.5 px-4 text-xs tracking-wide text-stone-300 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 text-amber-400/90">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Abierto Hoy - Cocina Auténtica Cubana
            </span>
            <span className="hidden md:inline text-stone-400">|</span>
            <span className="hidden md:flex items-center gap-1 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              Lunes a Domingo: 3:00 PM - 10:00 PM
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <span className="hidden sm:flex items-center gap-1 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#d61327]" />
              Guatemala 🇬🇹
            </span>
            <span className="bg-[#d61327]/20 text-[#fca5a5] border border-[#d61327]/40 px-2 py-0.5 rounded font-medium text-[11px]">
              Precios en Quetzales (Q)
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation & brand */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Logo & Identity */}
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#d61327] to-[#8f1b27] flex items-center justify-center shadow-lg border-2 border-amber-400/40 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-quintessential text-2xl font-bold tracking-wider">PH</span>
              </div>
              <div className="flex flex-col">
                <span className="font-quintessential text-2xl sm:text-3xl font-bold text-[#fcfafa] tracking-wide leading-none drop-shadow-sm">
                  La Pequeña Habana
                </span>
                <span className="font-old-standard text-xs sm:text-sm text-amber-200/90 tracking-widest uppercase mt-0.5">
                  Restaurante & Sazón Cubana
                </span>
              </div>
            </a>

            {/* Mobile WhatsApp link */}
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md transition-transform active:scale-95"
              title="Escríbenos por WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Search bar & WhatsApp desktop button */}
          <div className="flex items-center gap-3 flex-1 md:max-w-md lg:max-w-lg md:ml-auto">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-stone-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por platillo o ingrediente (ej. Ropa Vieja, Mojo, Queso)..."
                className="w-full pl-10 pr-9 py-2 sm:py-2.5 bg-[#1c275c]/90 text-sm text-[#fcfafa] placeholder-stone-400 rounded-full border border-white/15 focus:outline-none focus:ring-2 focus:ring-[#d61327] focus:border-transparent transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-white"
                  title="Limpiar búsqueda"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Desktop WhatsApp button */}
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
