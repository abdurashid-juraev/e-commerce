import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ProductCard } from '../../../../interface/interfaces';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NzCardModule, CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor() {}

  @Input() card!: ProductCard;
}
