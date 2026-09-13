import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppGeneralUrl } from '../lib/utils';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={getWhatsAppGeneralUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/80"
        title="Consultar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
        </span>
      </a>
    </aside>
  );
};
