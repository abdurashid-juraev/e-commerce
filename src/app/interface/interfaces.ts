import { QuizComponent } from './../pages/quiz/quiz.component';
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
export interface Quizzes {
  question: string;
  options: [];
  correct_answer:string
}

export interface Users {
  id: number;
  fullname: string;
  email: string;
  age: number;
  gender: string;
  address: string;
}