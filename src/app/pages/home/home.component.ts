import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../component/components/main-input/search/search.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CardComponent } from '../../component/components/cards/card/card.component';
import { ProductCard } from '../../interface/interfaces';
import { CardService } from '../../service/card.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, NzGridModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cards: ProductCard[] = [];
  filteredCards: ProductCard[] = [];

  constructor(private cardservice: CardService, ) {}

  ngOnInit(): void {
    this.cardservice.getCards().subscribe((cards) => {
      this.cards = cards;
      this.filteredCards = cards;
    });
  }

  filterCard(searchText: string) {
    const inputText = searchText.toLowerCase();
    if (inputText === '') {
      this.filteredCards = this.cards;
      return;
    } else {
      this.filteredCards = this.cards.filter(
        (card: { title: string; category: string; }) =>
          card.title.toLowerCase().includes(inputText) ||
          card.category.toLowerCase().includes(inputText)
      );
    }
  }

  
}
