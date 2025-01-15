import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCardComponent {
  @Input({ required: true }) post!: number;

  // parent komponent uchun event
  @Output() counterToParent = new EventEmitter<number>();
  // event parametr
  n: number = 1 + 1;

  // child tomondan jo'natadigan event
  sendToParent() {
    this.counterToParent.emit(this.n);
  }
}
