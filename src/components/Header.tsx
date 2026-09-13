import React, { useState } from 'react';
import { Search, X, MessageCircle, MapPin, Clock } from 'lucide-react';
import { getWhatsAppGeneralUrl, cn } from '../lib/utils';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header className="w-full bg-[#111942] text-[#fcfafa] border-b border-[#1c275c] shadow-md transition-all sticky top-0 z-40">
      {/* Top micro banner (Desktop & Tablet only) */}
      <div className="hidden sm:block bg-[#0a0f28] py-1 px-3 sm:px-4 text-[11px] sm:text-xs tracking-wide text-stone-300 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-1 text-stone-100/90 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Abierto Hoy
            </span>
            <span className="hidden md:inline text-stone-400">|</span>
            <span className="hidden md:flex items-center gap-1 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              Lunes a Domingo: 3:00 PM - 10:00 PM
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://www.google.com/maps/place/Campos+de+Softbol+CDAG/@14.5998309,-90.4994541,17z/data=!4m6!3m5!1s0x8589a3a555d64e15:0x522e3f45ac4b9335!8m2!3d14.5998153!4d-90.4971474!16s%2Fg%2F11g6j9v9pb?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-stone-300 hover:text-white transition-colors"
              title="Ver ubicación en Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#d61327]" />
              Zona 15, Campos CDAG, Guatemala
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation & brand */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">

          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#d61327] to-[#8f1b27] flex items-center justify-center shadow-md border-2 border-amber-400/40 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-quintessential text-xl sm:text-2xl font-bold tracking-wider">PH</span>
            </div>
            <div className="flex flex-col">
              <span className="font-quintessential text-lg sm:text-2xl md:text-3xl font-bold text-[#fcfafa] tracking-wide leading-none drop-shadow-sm">
                La Pequeña Habana
              </span>
              <span className="font-old-standard text-[10px] sm:text-xs md:text-sm text-amber-200/90 tracking-widest uppercase mt-0.5">
                Restaurante & Sazón Cubana
              </span>
            </div>
          </a>

          {/* Mobile Icon-only Actions: Lupa, Ubicación, WhatsApp */}
          <div className="flex items-center gap-1.5 md:hidden">
            {/* Lupa (Buscar) */}
            <button
              type="button"
              onClick={() => setIsMobileSearchOpen((prev) => !prev)}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-sm border border-white/15",
                isMobileSearchOpen || searchQuery
                  ? "bg-[#d61327] text-white"
                  : "bg-[#1c275c] text-stone-200 hover:text-white"
              )}
              aria-label="Buscar platillos"
              title="Buscar platillos"
            >
              <Search className="w-3.5 h-3.5" />
            </button>

            {/* Ubicación (Pin Maps) */}
            <a
              href="https://www.google.com/maps/place/Campos+de+Softbol+CDAG/@14.5998309,-90.4994541,17z/data=!4m6!3m5!1s0x8589a3a555d64e15:0x522e3f45ac4b9335!8m2!3d14.5998153!4d-90.4971474!16s%2Fg%2F11g6j9v9pb?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#1c275c] hover:bg-[#d61327] text-white flex items-center justify-center transition-all active:scale-95 shadow-sm border border-white/15"
              aria-label="Ver ubicación en Google Maps"
              title="Encuéntranos en Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#d61327] hover:text-white" />
            </a>

            {/* WhatsApp */}
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-all active:scale-95 shadow-sm"
              aria-label="Escríbenos por WhatsApp"
              title="WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
            </a>
          </div>

          {/* Desktop Search bar & Action Buttons (Visible on md+) */}
          <div className="hidden md:flex items-center gap-3 flex-1 max-w-md lg:max-w-lg ml-auto">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-stone-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por platillo o ingrediente..."
                className="w-full pl-10 pr-9 py-2 bg-[#1c275c]/90 text-sm text-[#fcfafa] placeholder-stone-400 rounded-full border border-white/15 focus:outline-none focus:ring-2 focus:ring-[#d61327] focus:border-transparent transition-all shadow-inner"
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

            {/* Desktop Eventos button */}
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Eventos</span>
            </a>

            {/* Desktop Google Maps Encuéntranos button */}
            <a
              href="https://www.google.com/maps/place/Campos+de+Softbol+CDAG/@14.5998309,-90.4994541,17z/data=!4m6!3m5!1s0x8589a3a555d64e15:0x522e3f45ac4b9335!8m2!3d14.5998153!4d-90.4971474!16s%2Fg%2F11g6j9v9pb?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d61327] hover:bg-[#b01322] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 shrink-0"
              title="Ver ubicación en Google Maps"
            >
              <MapPin className="w-4 h-4 text-white" />
              <span>Encuéntranos</span>
            </a>
          </div>

        </div>

        {/* Mobile Search Bar Dropdown */}
        {isMobileSearchOpen && (
          <div className="md:hidden mt-2 pt-2 border-t border-white/10 animate-in fade-in duration-200">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-3.5 w-3.5 text-stone-400" />
              </div>
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por platillo o ingrediente..."
                className="w-full pl-9 pr-8 py-1.5 bg-[#1c275c] text-xs text-[#fcfafa] placeholder-stone-400 rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#d61327]"
              />
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-stone-400 hover:text-white"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              ) : (
                <button
                  onClick={() => setIsMobileSearchOpen(false)}
                  className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-stone-400 hover:text-white"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

