import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCard } from '../interface/interfaces';
@Injectable({
  providedIn: 'root',
})
export class CardService {
  url = 'http://localhost:3000/cards';
  data: ProductCard[] = [];

  async getCards(): Promise<ProductCard[]> {
    try {
      const response = await fetch(this.url)
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
      }
      const data: ProductCard[] = await response.json()
      this.data = data
      return data
    
    } catch (error) {
      console.error('Failed to fetch cards', error);
      return []
    }
  }
}
