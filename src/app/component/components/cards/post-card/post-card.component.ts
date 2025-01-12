import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCardComponent {
  @Input({ required: true }) post!: string;

  @Output() dataEvent = new EventEmitter<string>();

  text: string = 'from Post Card';
  sendData() {
    this.dataEvent.emit(this.text);
  }
}
