import { Component } from '@angular/core';
import { PostCardComponent } from '../../component/components/cards/post-card/post-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  postMessage = 'Some Post Message!';

  message = '';
  recaiveMessage(data: string) {
    this.postMessage = data;
    alert(this.postMessage);
  }
}
