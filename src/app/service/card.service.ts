import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCard } from '../interface/interfaces';
@Injectable({
  providedIn: 'root',
})
export class CardService {
  httpUrl = 'http://localhost:3000/cards';
  cards: ProductCard[] = [];

  constructor(private http: HttpClient) {}
  getCards(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(this.httpUrl);
  }

 getCardId(id: number): Observable<ProductCard> {
    return this.http.get<ProductCard>(`${this.httpUrl}/${id}`);
  }
}
                                        