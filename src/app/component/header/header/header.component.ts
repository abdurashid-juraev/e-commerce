import { Component, NgModule } from '@angular/core';
import { NotificationService } from '../../../service/notification.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NzLayoutModule, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  count = 1;
  emptyBasket: string = 'https://img.icons8.com/2266EE/38/shopping-cart.png';
  menuItems = [
    { label: 'Page 1', link: '/' },
    { label: 'Page 2', link: '/about' },
    { label: 'Page 3', link: '/contact' },
  ];

  constructor(private notificationService: NotificationService) {}
  notify(): void {
    this.notificationService.show('Notification');
  }
}
