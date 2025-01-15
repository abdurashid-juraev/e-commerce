import { Component, Output } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ProductCard } from '../../../../interface/interfaces';
import { EventEmitter } from '@angular/core';
import { CardService } from '../../../../service/card.service';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NzLayoutModule,
    FormsModule,
    NzAutocompleteModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  constructor(private cardService: CardService) {}
  @Output() filteredData = new EventEmitter<string>();

  inputValue?: string;
  cards: ProductCard[] = [];
  filteredCards: ProductCard[] = [];
  onChange(e: Event): void {
    this.filteredCards = this.cards.filter((card) =>
      card.title
        .toLowerCase()
        .includes((e.target as HTMLInputElement).value.toLowerCase())
    );
    console.log(this.filteredCards);
  }
}
