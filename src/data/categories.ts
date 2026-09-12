import type { CategoryOption } from '../types/menu';

export const CATEGORIES: CategoryOption[] = [
  {
    id: 'todos',
    name: 'Todos los Platillos',
    shortName: 'Todos',
    iconName: 'UtensilsCrossed'
  },
  {
    id: 'platos-fuertes',
    name: 'Platos Fuertes Tradicionales',
    shortName: 'Platos Fuertes',
    iconName: 'Flame'
  },
  {
    id: 'sandwiches',
    name: 'Sándwiches Cubanos',
    shortName: 'Sándwiches',
    iconName: 'Sandwich'
  },
  {
    id: 'entradas',
    name: 'Aperitivos & Entradas',
    shortName: 'Entradas',
    iconName: 'Sparkles'
  },
  {
    id: 'guarniciones',
    name: 'Guarniciones Criollas',
    shortName: 'Guarniciones',
    iconName: 'Salad'
  },
  {
    id: 'postres',
    name: 'Postres Típicos',
    shortName: 'Postres',
    iconName: 'CakeSlice'
  },
  {
    id: 'bebidas',
    name: 'Bebidas & Coctelería',
    shortName: 'Bebidas & Cocteles',
    iconName: 'GlassWater'
  }
];
