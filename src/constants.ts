export interface Product {
  id: string;
  name: string;
  category: 'Original' | 'Zero Sugar' | 'Flavors' | 'Diet';
  description: string;
  image: string;
  calories: number;
  sugar: string;
  story: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'coke-original',
    name: 'Coca-Cola Original Taste',
    category: 'Original',
    description: 'The legendary sparkling soft drink that has been refreshing the world since 1886.',
    image: 'https://picsum.photos/seed/coke-original/600/800',
    calories: 140,
    sugar: '39g',
    story: 'Born in Atlanta, Georgia, in 1886, Coca-Cola Original Taste is the world’s favorite soft drink. Its taste is unique and unmistakable.'
  },
  {
    id: 'coke-zero',
    name: 'Coca-Cola Zero Sugar',
    category: 'Zero Sugar',
    description: 'Great Coca-Cola taste, zero sugar. The perfect choice for those who want the best of both worlds.',
    image: 'https://picsum.photos/seed/coke-zero/600/800',
    calories: 0,
    sugar: '0g',
    story: 'Launched in 2005, Coca-Cola Zero Sugar was created to offer the same great taste as the original but without the calories.'
  },
  {
    id: 'coke-cherry',
    name: 'Coca-Cola Cherry',
    category: 'Flavors',
    description: 'The classic taste of Coca-Cola with a sweet, refreshing twist of cherry flavor.',
    image: 'https://picsum.photos/seed/coke-cherry/600/800',
    calories: 150,
    sugar: '42g',
    story: 'Introduced in 1985, Cherry Coke brought a playful and fruity dimension to the classic refreshment.'
  },
  {
    id: 'diet-coke',
    name: 'Diet Coke',
    category: 'Diet',
    description: 'A crisp, refreshing, sugar-free and calorie-free soft drink with a unique taste.',
    image: 'https://picsum.photos/seed/diet-coke/600/800',
    calories: 0,
    sugar: '0g',
    story: 'Diet Coke was the first sugar-free brand to carry the Coca-Cola name, launching in 1982.'
  }
];

export interface Campaign {
  id: string;
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  cta: string;
}

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'real-magic',
    title: 'Real Magic',
    description: 'Magic happens when we come together. Discover the moments that make life extraordinary.',
    image: 'https://picsum.photos/seed/magic/1200/600',
    cta: 'Experience the Magic'
  },
  {
    id: 'coke-studio',
    title: 'Coke Studio',
    description: 'Where music meets refreshment. Explore exclusive tracks and behind-the-scenes content.',
    image: 'https://picsum.photos/seed/music/1200/600',
    cta: 'Listen Now'
  }
];
