import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LoginComponent } from '../../pages/login/login.component';

@Component({
  standalone: true,
  imports: [NzLayoutModule, RouterOutlet, LoginComponent],
  templateUrl: './authLayout.component.html',
  styleUrl: './authLayout.component.scss',
})
export class AuthLayoutComponents {}
