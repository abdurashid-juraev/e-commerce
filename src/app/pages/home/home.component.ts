import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../component/components/main-input/search/search.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CardComponent } from '../../component/components/cards/card/card.component';
import { ProductCard } from '../../interface/interfaces';
import { CardService } from '../../service/card.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, NzGridModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cards: ProductCard[] = [];
  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards) => {
      this.cards = cards;
    });
  }

  navigateToCard(card: ProductCard) {
    this.router.navigate(['card-detail', card.id]);
  }
}
