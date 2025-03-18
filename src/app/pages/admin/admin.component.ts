
import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterOutlet, Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
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
  constructor( private router: Router) {
    
  }
}
