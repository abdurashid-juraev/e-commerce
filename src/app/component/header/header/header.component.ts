import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NotificationService } from '../../../service/notification.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  count = 1;
  counter() {
    this.count++;
  }

  constructor(private notificationService: NotificationService) {}
  notify(): void {
    this.notificationService.show('Notification');
  }
}
