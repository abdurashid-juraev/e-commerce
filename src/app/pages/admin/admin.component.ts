
import { Component } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconService } from 'ng-zorro-antd/icon';
import { RouterOutlet, Router, RouterLink, RouterModule } from '@angular/router';
import { AdminContentComponent } from './admin-contents/admin-content/admin-content.component';
import { QuizComponent } from '../quiz/quiz.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
    RouterOutlet,
    RouterLink,
    RouterModule, 
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  quiz() {
    this.router.navigate(['/quiz']);
  }
  isCollapsed = false;
  constructor(private iconService: NzIconService, private router: Router) {
    
  }
}
