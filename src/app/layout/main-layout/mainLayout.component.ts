import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from '../../component/header/header/header.component';
// import { FooterComponent } from '../../component/footer/footer/footer.component';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    NzLayoutModule,
    HeaderComponent
    // FooterComponent,
],
  templateUrl: './mainLayout.component.html',
  styleUrl: './mainLayout.component.scss',
})
export class MainLayoutComponents {}
