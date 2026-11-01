export const MENU_CATEGORIES = ['Starters', 'Mains', 'Breads & Rice', 'Desserts'] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  veg: boolean;
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken Platter',
    description: 'Charcoal-kissed chicken marinated overnight in hung curd and ginger, served with mint chutney.',
    price: 480,
    category: 'Starters',
    veg: false,
    image: 'https://images.pexels.com/photos/30749027/pexels-photo-30749027.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop',
  },
  {
    id: 'seekh-kebab',
    name: 'Seekh Kebab Platter',
    description: 'Minced meat with fresh herbs and whole spices, grilled on skewers and served with grilled bread.',
    price: 520,
    category: 'Starters',
    veg: false,
    image: 'https://images.pexels.com/photos/18698225/pexels-photo-18698225.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop',
  },
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka Bowl',
    description: 'Cubes of cottage cheese, peppers and onions smoked in the tandoor with a tangy yoghurt glaze.',
    price: 380,
    category: 'Starters',
    veg: true,
    image: 'https://images.pexels.com/photos/24206922/pexels-photo-24206922.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop',
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description: 'Our signature tomato and cashew gravy, finished with cream and butter in a copper pan.',
    price: 560,
    category: 'Mains',
    veg: false,
    image: 'https://images.pexels.com/photos/29685054/pexels-photo-29685054.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop',
  },
  {
    id: 'kadai-chicken',
    name: 'Kadai Chicken',
    description: 'Tender chicken tossed with bell peppers, freshly ground spices and coriander in a traditional kadai.',
    price: 540,
    category: 'Mains',
    veg: false,
    image: 'https://images.pexels.com/photos/29684985/pexels-photo-29684985.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop',
  },
  {
    id: 'rogan-josh',
    name: 'Brass Pot Rogan Josh',
    description: 'A fiery Kashmiri-style curry slow-simmered in a brass pot until rich and deeply aromatic.',
    price: 580,
    category: 'Mains',
    veg: false,
    image: 'https://images.pexels.com/photos/29685076/pexels-photo-29685076.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop',
  },
  {
    id: 'lamb-biryani',
    name: 'Lamb Dum Biryani',
    description: 'Aged basmati and tender lamb layered and sealed in a clay pot, served with raita and shorba.',
    price: 640,
    category: 'Breads & Rice',
    veg: false,
    image: 'https://images.pexels.com/photos/32986474/pexels-photo-32986474.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop',
  },
  {
    id: 'tandoori-breads',
    name: 'Tandoori Breads Basket',
    description: 'Garlic naan, butter roti and kulcha fresh from the clay oven, brushed with ghee.',
    price: 220,
    category: 'Breads & Rice',
    veg: true,
    image: 'https://images.pexels.com/photos/29253305/pexels-photo-29253305.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop',
  },
  {
    id: 'jeera-rice',
    name: 'Jeera Rice with Chutney',
    description: 'Fragrant cumin-tempered basmati rice served with our house-made coconut and mint chutney.',
    price: 260,
    category: 'Breads & Rice',
    veg: true,
    image: 'https://images.pexels.com/photos/24206918/pexels-photo-24206918.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop',
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Warm milk-solid dumplings soaked in cardamom and rose syrup, served with a scoop of kulfi.',
    price: 240,
    category: 'Desserts',
    veg: true,
    image: 'https://images.pexels.com/photos/9951856/pexels-photo-9951856.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop',
  },
  {
    id: 'moti-choor-ladoo',
    name: 'Moti Choor Ladoo',
    description: 'Golden gram-flour pearls bound with ghee and pistachio, a classic sweet from our celebration menu.',
    price: 260,
    category: 'Desserts',
    veg: true,
    image: 'https://images.pexels.com/photos/27695746/pexels-photo-27695746.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop',
  },
  {
    id: 'masala-chai',
    name: 'Masala Chai',
    description: 'Slow-brewed spiced tea with ginger, cardamom and cinnamon, served in a brass tumbler.',
    price: 160,
    category: 'Desserts',
    veg: true,
    image: 'https://images.pexels.com/photos/12865880/pexels-photo-12865880.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop',
  },
];
