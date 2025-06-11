import { Component, Input, OnInit, signal } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ProductCard } from '../../../../interface/interfaces';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NzCardModule, CurrencyPipe, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(private router: Router) {}
  @Input() card!: ProductCard;

  isSelected = false;

  emptyBasket: string = 'https://img.icons8.com/2266EE/38/shopping-cart.png';

  navigateToCard(card: ProductCard) {
    this.router.navigate(['card-detail', card.id]);
  }

  addToBasket(card: ProductCard): void {
    this.isSelected = !this.isSelected;
  }
}
