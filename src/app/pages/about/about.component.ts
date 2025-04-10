import { Component } from '@angular/core';
import { PostCardComponent } from '../../component/components/cards/post-card/post-card.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-about',
  standalone: true,
  // imports: [PostCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  // inputga data
  // postCounter = 0;
  // bu eventni childdan jo'natilgan output event ishlatadi
  // recaiveMessage(n: number) {
  //   this.postCounter++;
  // }

  //  counter:Observable<number> 

}
