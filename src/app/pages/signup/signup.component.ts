import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {
  AbstractControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    NzLayoutModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
  
export class SignupComponent implements OnInit, OnDestroy {
  validateForm!:FormGroup
 
  private destroy$ = new Subject<void>();

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
     this.validateForm = this.fb.group({
       email: this.fb.control('', [Validators.email, Validators.required]),
       password: this.fb.control('', [Validators.required]),
       checkPassword: this.fb.control('', [
         Validators.required,
         this.confirmationValidator,
       ]),
       username: this.fb.control('', [Validators.required]),
       agree: this.fb.control(false),
     });
    this.validateForm.controls['password'].valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.validateForm.controls['checkPassword'].updateValueAndValidity();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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

  confirmationValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  }


}