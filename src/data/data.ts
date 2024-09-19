// import slide2 from '@/assets/slide2.png';
// import slide3 from '@/assets/slide3.png';
// import slide4 from '@/assets/slide4.png';
import { Slide, Category, Product, CartItem } from '@/typings/typing';
export const slides: Slide[] = [
  {
    id: 1,
    title: 'Electronic Products',
    description: 'Sale! Up to 50% off!',
    img: '/slide-1.jpg',
    url: '/',
    bg: '#F9F2FC',
  },
  {
    id: 2,
    title: 'Quality headphones',
    description: 'Sale! Up to 30% off!',
    img: '/slide-2.jpg',
    url: '/',
    bg: '#F4F8F8',
  },
  {
    id: 3,
    title: 'Gaming gadgets',
    description: 'Sale! Up to 60% off!',
    img: '/slide-3.jpg',
    url: '/',
    bg: '#FEF7F1',
  },
  {
    id: 3,
    title: 'Mobile phones',
    description: 'Sale! Up to 40% off!',
    img: '/slide-4.jpg',
    url: '/',
    bg: '#FEF7F1',
  },
];

export const categories: Category[] = [
  {
    title: 'Mobile phone',
    id: 1,
    img: '/cat-4.jpg',
  },
  {
    title: 'Head phones',
    id: 2,
    img: '/cat-3.jpg',
  },
  {
    title: 'Gaming laptops',
    id: 3,
    img: '/cat-1.jpeg',
  },
  {
    title: 'Tvs',
    id: 4,
    img: '/cat-2.jpg',
  },
  {
    title: 'Mobile phone',
    id: 5,
    img: '/cat-4.jpg',
  },
  {
    title: 'Head phones',
    id: 6,
    img: '/cat-3.jpg',
  },
  {
    title: 'Gaming laptops',
    id: 17,
    img: '/cat-1.jpeg',
  },
  {
    title: 'Tvs',
    id: 81,
    img: '/cat-2.jpg',
  },
];
export const products: Product[] = [
  {
    title: 'Mobile phone',
    id: '1',
    img: '/cat-4.jpg',
    description: 'apple phone with the latest technology',
    rating: 3,
    price: 45,
  },
  {
    title: 'Mobile phone',
    id: '2',
    img: '/cat-1.jpeg',
    description: 'apple phone with the latest technology',
    rating: 3,
    price: 45,
  },
  {
    title: 'Mobile phone',
    id: '23',
    img: '/cat-2.jpg',
    description: 'apple phone with the latest technology',
    rating: 3,
    price: 45,
  },
  {
    title: 'Mobile phone',
    id: '4',
    img: '/cat-4.jpg',
    description: 'apple phone with the latest technology',
    rating: 3,
    price: 45,
  },
  {
    title: 'Mobile phone',
    id: '111111',
    img: '/cat-4.jpg',
    description: 'apple phone with the latest technology',
    rating: 3,
    price: 45,
  },
  {
    title: 'Mobile phone',
    id: '2333333',
    img: '/cat-1.jpeg',
    description: 'apple phone with the latest technology',
    rating: 3,
    price: 45,
  },
  {
    title: 'Mobile phone',
    id: '24563',
    img: '/cat-2.jpg',
    description: 'apple phone with the latest technology',
    rating: 3,
    price: 45,
  },
  {
    title: 'Mobile phone',
    id: '4444444',
    img: '/cat-4.jpg',
    description: 'apple phone with the latest technology',
    rating: 3,
    price: 45,
  },
];
export const product = {
  title: 'Mobile phone',
  id: '1',
  images: ['/cat-1.jpeg', '/cat-2.jpg', '/cat-4.jpg'],
  description: 'apple phone with the latest technology',
  rating: 3,
  price: 45,
  cat: 'laptop',
  brand: 'samsung',
  discount: 0,
  $id: '2',
  stock: 3,
  sizes: ['xxx', 'small', 'medium'],
  colors: ['red', 'green', 'white'],
};
export const cart: CartItem[] = [
  {
    title: 'mobile phone',
    image: '/cat-3.jpg',
    amount: 3,
    brand: 'sumsang',
    $id: '12345',
    stock: 5,
    size: 'XXX',
    color: 'golden',
    price: 24,
  },
  {
    title: 'mobile phone',
    image: '/cat-3.jpg',
    amount: 3,
    brand: 'sumsang',
    $id: '123455',
    stock: 5,
    size: 'XXX',
    color: 'golden',
    price: 24,
  },
  {
    title: 'mobile phone',
    image: '/cat-3.jpg',
    amount: 3,
    brand: 'sumsang',
    $id: '1234557',
    stock: 5,
    size: 'XXX',
    color: 'golden',
    price: 24,
  },
  {
    title: 'mobile phone',
    image: '/cat-3.jpg',
    amount: 3,
    brand: 'sumsang',
    $id: '12345578',
    stock: 5,
    size: 'XXX',
    color: 'golden',
    price: 24,
  },
  {
    title: 'mobile phone',
    image: '/cat-3.jpg',
    amount: 3,
    brand: 'sumsang',
    $id: '12345579',
    stock: 5,
    size: 'XXX',
    color: 'golden',
    price: 24,
  },
];
