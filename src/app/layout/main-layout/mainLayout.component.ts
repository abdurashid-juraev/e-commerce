import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../component/header/header/header.component';
// import { FooterComponent } from '../../component/footer/footer/footer.component';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    HeaderComponent
],
  templateUrl: './mainLayout.component.html',
  styleUrl: './mainLayout.component.scss',
})
export class MainLayoutComponents {}
