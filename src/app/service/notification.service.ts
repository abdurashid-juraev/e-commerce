import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  show(message: string) {
    alert(message);
  }
}
