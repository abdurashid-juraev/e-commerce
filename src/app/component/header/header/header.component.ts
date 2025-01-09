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
  menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
  ];

  constructor(private notificationService: NotificationService) {}
  notify(): void {
    this.notificationService.show('Notification');
  }
}
