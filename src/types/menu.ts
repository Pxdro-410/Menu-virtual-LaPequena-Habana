export interface Dish {
  id: string;
  name: string;
  category: string;
  price: number; // En Quetzales (GTQ)
  description: string;
  image: string;
  badge?: string;
  badgeType?: 'red' | 'blue' | 'gold';
  prepTime?: string;
  portion?: string;
  ingredients: string[];
  tags: string[];
  isPopular?: boolean;
  pairing?: string;
  recommendation?: string;
}

export interface CategoryOption {
  id: string;
  name: string;
  shortName: string;
  iconName: string;
  count?: number;
}
