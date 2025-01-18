import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  Validators,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule  } from 'ng-zorro-antd/icon';
import { NzInputGroupComponent, NzInputModule } from 'ng-zorro-antd/input';
import { LockFill, UserOutline } from '@ant-design/icons-angular/icons';
import { NzIconService } from 'ng-zorro-antd/icon'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    RouterLink,
    NzIconModule,
    NzInputGroupComponent,
  ],
  providers: [
    { provide: 'LockFilled', useFactory: () => LockFill },
    provideNzIcons([UserOutline]),
    provideNzIcons([LockFill]),
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: NonNullableFormBuilder,
    private iconService: NzIconService
  ) {
    this.iconService.addIcon(LockFill);
  }

  ngOnInit(): void {
    
    this.validateForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      remember: this.fb.control(false),
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
function provideNzIcons(arg0: import("@ant-design/icons-angular").IconDefinition[]): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

