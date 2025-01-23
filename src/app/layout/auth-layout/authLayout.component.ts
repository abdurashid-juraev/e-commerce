import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  standalone: true,
  imports: [NzLayoutModule, RouterOutlet],
  templateUrl: './authLayout.component.html',
  styleUrl: './authLayout.component.scss',
})
export class AuthLayoutComponents {}
