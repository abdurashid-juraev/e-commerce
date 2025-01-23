import { TeachersService } from './../service/teachers.service';
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
