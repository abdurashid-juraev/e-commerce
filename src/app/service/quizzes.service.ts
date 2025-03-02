import { Quizzes } from './../interface/interfaces';
import {  Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root',
})
export class QuizzesService{
  httpUrl='http://localhost:3000/quizzes';
  quizzes: Quizzes[]=[]
  
  constructor(private http:HttpClient){}

  getQuizzes():Observable<Quizzes[]>{
    return this.http.get<Quizzes[]>(this.httpUrl)
  }



}