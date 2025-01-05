import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header/header.component';
import { FooterComponent } from '../../component/footer/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
