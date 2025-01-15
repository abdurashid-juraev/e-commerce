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
  card: any;
  cards: ProductCard[] = [];
  constructor(
    private route: ActivatedRoute,
    private cardservice: CardService
  ) {}

  ngOnInit(): void {
    const cardId = this.route.snapshot.params['id'];
    this.cardservice.getCards().subscribe((cards) => {
      this.cards = cards;
      this.card = this.cards.find((card) => card.id === +cardId);
    });
  }
}
