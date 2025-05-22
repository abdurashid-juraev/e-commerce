export interface ProductCard {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}
export interface Teachers {
  id: number;
  name: string;
  description: string;
  address: string;
  date: string;
  regData: string;
  phone: string;
  email: string;
  telegram: string;
  job: string;
  action: string;
}
export interface UserPost {
  full_name: string;
  email: string;
  age: number | null;
  gender: string;
  address: string;
}
export interface Users extends UserPost {
  id: number;
}
