import {Component} from '@angular/core'

@Component({
  standalone: true,
  selector: 'app-user-control',
  template: `@if(isAdmin){
    <button class="px-8 py-4 bg-blue-500 text-white rounded-md" type="button">Erase database</button>
    } @else {
      <p class="text-red-500 text-xl">You are not authorized!</p>
    }`,
  styles: ``,
})
export class UserControl {
  isAdmin = true;
}