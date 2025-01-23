import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  TeamOutline,
  UserOutline,
} from '@ant-design/icons-angular/icons';
import { Component } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconService } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isCollapsed = false;
  constructor(private iconService: NzIconService) {
    this.iconService.addIcon(
      UserOutline,
      TeamOutline,
      MenuFoldOutline,
      MenuUnfoldOutline
    );
  }
}
