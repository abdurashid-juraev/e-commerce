import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header/header.component';
import { FooterComponent } from '../../component/footer/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
