export type Slide = {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
};
export type Category = {
  $id: string;
  name: string;
  banner: string;
  hasAnOffer: boolean;
  discount: number;
};
export type CartItem = {
  title: string;
  image: string;
  amount: number;
  brand: string;
  $id: string;
  stock: number;
  size: string;
  color: string;
  price: number;
};
export type Product = {
  title: string;
  images: string[];
  description: string;
  rating: number;
  price: number;
  category: Category;
  brand: string;
  discount: number;
  stock: number;
  sizes: string[];
  colors: string[];
  specifications?: string[];
  $id: string;
  $createdAt: string;
  $updatedAt: string;
};
export type appwriteConfiguration = {
  appWriteEndPoint: string;
  appWriteProject: string;
  appWriteBucket?: string;
  appWriteDatabase: string;
  appWriteProductCollectionID: string;
  appWriteUsersCollectionID: string;
  appWriteCategoryCollectionID: string;
};
export type User = {
  username: string;
  email: string;
  avatar: string;
  $id: string;
  accountId: string;
  saved: string[];
};
