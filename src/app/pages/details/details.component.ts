import { Component, OnInit } from '@angular/core';
import { ProductCard } from './../../interface/interfaces';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CardService } from './../../service/card.service';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  card?: ProductCard;
  cards: ProductCard[] = [];
  constructor(
    private route: ActivatedRoute,
    private cardservice: CardService
  ) {}

 async ngOnInit():Promise<void> {
    const cardId = this.route.snapshot.params['id']
    this.cards = await this.cardservice.getCards()
    this.card = await this.cards.find((card) => card.id === +cardId)
  }
}
