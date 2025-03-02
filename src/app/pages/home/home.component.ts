import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../component/components/main-input/search/search.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CardComponent } from '../../component/components/cards/card/card.component';
import { ProductCard } from '../../interface/interfaces';
import { CardService } from '../../service/card.service';
import { SearchFilterPipe } from '../../shared/pipes/filter.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, NzGridModule, CardComponent, SearchFilterPipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  cards: ProductCard[] = [];
  odd = false;
  constructor(private cardservice: CardService) {}

  ngOnInit(): void {
    this.cardservice.getCards().subscribe((cards) => {
      this.cards = cards;
    });
  }
  inputText = '';
  filterCard(text: string) {
    this.inputText = text;
  }
}
