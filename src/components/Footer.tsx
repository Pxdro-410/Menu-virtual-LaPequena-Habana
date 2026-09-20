import React from 'react';
import { MessageCircle, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { getWhatsAppGeneralUrl, getAssetUrl } from '../lib/utils';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111942] text-[#fcfafa] border-t-4 border-[#d61327] mt-16">
      {/* Decorative Cuban color ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#111942] via-[#d61327] to-[#111942]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Col 1: Brand & Story */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-md border-2 border-amber-400/50 bg-white shrink-0 flex items-center justify-center p-0.5">
                <img
                  src={getAssetUrl('/favicon.png')}
                  alt="Logo La Pequeña Habana"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-quintessential text-2xl font-bold tracking-wide">
                La Pequeña Habana
              </span>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed font-light">
              Trayendo el auténtico calor de la isla a tu platillo, con sazón y música de las calles de La Habana directamente a Guatemala. Recetas tradicionales y caseras preparadas con amor y sazón cubana.
            </p>
            <div className="pt-2 flex items-center gap-3 text-stone-300">
              <a
                href="https://www.instagram.com/la.pequena.habana?stkn=aGYyOWdxM284ZGdt&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de La Pequeña Habana"
                title="Síguenos en Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c13584] flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=100092332883937&sk=about"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de La Pequeña Habana"
                title="Síguenos en Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1fb855] text-white flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Horarios */}
          <div className="space-y-3">
            <h4 className="font-old-standard text-lg font-bold text-amber-300 border-b border-white/10 pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#d61327]" />
              Horarios de Atención
            </h4>
            <ul className="space-y-2 text-sm text-stone-300 font-light">
              <li className="flex justify-between">
                <span>Lunes a jueves:</span>
                <span className="font-medium text-white">03:00 PM - 10:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Viernes:</span>
                <span className="font-medium text-white">03:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado a Domingo:</span>
                <span className="font-medium text-white">12:00 PM - 10:30 PM</span>
              </li>
              <li className="flex justify-between text-stone-400">
                <span>días festivos:</span>
                <span className="italic">Cerrado por descanso</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Ubicación y Contacto */}
          <div className="space-y-3">
            <h4 className="font-old-standard text-lg font-bold text-amber-300 border-b border-white/10 pb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d61327]" />
              Ubicación & Contacto
            </h4>
            <ul className="space-y-3 text-sm text-stone-300 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d61327] shrink-0 mt-0.5" />
                <span>Zona 15, Ciudad de Guatemala, Guatemala</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+502 5550-8874</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>lapequenahabana0@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: WhatsApp & Eventos */}
          <div className="space-y-3 bg-[#0a0f28] p-5 rounded-2xl border border-white/10">
            <h4 className="font-old-standard text-lg font-bold text-white flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              Dudas & Eventos
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              ¿Deseas reservar nuestros servicios culinarios para una ocasión especial? atendemos cumpleaños, convivios o cualquier otro evento, puedes consultar con nosotros los detalles:
            </p>
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-md transition-transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
            <span className="block text-[11px] text-center text-stone-400">
              Respuesta rápida con atención personalizada
            </span>
          </div>

        </div>

        {/* Bottom copyright & Cuban note */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} La Pequeña Habana. Todos los derechos reservados.</span>
          </p>
          <p className="flex items-center gap-1 text-stone-400">
            <span>Hecho por</span>
            <a
              href="https://github.com/Pxdro-410"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-350 hover:text-white font-medium underline underline-offset-2 transition-colors"
              title="Perfil de GitHub de Pedro J. Caso"
            >
              Pedro J. Caso
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
