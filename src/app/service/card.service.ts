import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCard } from '../interface/interfaces';
@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiUrl = 'http://localhost:3000/cards';
  constructor(private http: HttpClient) {}

  getCards(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(this.apiUrl);
  }
}
