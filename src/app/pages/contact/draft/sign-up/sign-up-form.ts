import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'sign-up-form',
  template: `<button type="submit" [disabled]="formIsInvalid">Submit</button>`,
})
export class SignupForm {
  formIsInvalid = true;
}
