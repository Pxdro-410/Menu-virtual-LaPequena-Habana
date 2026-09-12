import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const RESTAURANT_PHONE = "50255508874";

export function getWhatsAppDishUrl(dishName: string, price: number) {
  const message = encodeURIComponent(
    `¡Hola La Pequeña Habana! 🇨🇺 Vi en su menú virtual el platillo: "${dishName}" (Q ${price.toFixed(2)}). Me gustaría hacer una consulta sobre disponibilidad o visitarlos pronto. ¡Gracias!`
  );
  return `https://wa.me/${RESTAURANT_PHONE}?text=${message}`;
}

export function getWhatsAppGeneralUrl() {
  const message = encodeURIComponent(
    `¡Hola La Pequeña Habana! 🇨🇺 Quisiera consultar información sobre su menú, horarios de atención o reservaciones para un evento. ¡Gracias!`
  );
  return `https://wa.me/${RESTAURANT_PHONE}?text=${message}`;
}
