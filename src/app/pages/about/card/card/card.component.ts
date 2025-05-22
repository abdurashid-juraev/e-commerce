import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-about',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardAboutComponent {
  @Input() class: string = '';
  @Input() title: string = 'title';

  public digit = null;

  @Output() count = new EventEmitter<number>();

  counter() {
    this.count.emit();
  }
}
