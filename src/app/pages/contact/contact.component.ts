import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header/header.component';
import { FooterComponent } from '../../component/footer/footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NzLayoutModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
