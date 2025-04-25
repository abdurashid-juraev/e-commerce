import {
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgClass,  } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
    NgClass,
    FormsModule,
  ],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export default class FormComponent implements AfterViewInit, OnInit {
  form!: FormGroup;
  @ViewChildren('phoneInput') phoneInputs!: QueryList<
    ElementRef<HTMLInputElement>
  >;

  ngOnInit(): void {
    this.getInputs();
  }

  getInputs(): void {
    this.form = new FormGroup({
      inputField: new FormControl('', Validators.required),
      formArr: new FormArray([]),
    });
  }

  ngAfterViewInit(): void {
    this.phoneInputs.changes.subscribe(() => {
      this.attachPhoneInputListeners();
    });
    this.attachPhoneInputListeners();
  }

private attachPhoneInputListeners(): void {
  this.phoneInputs.forEach((input, index) => {
    input.nativeElement.addEventListener('input', (e) => {
      const inputElement = e.target as HTMLInputElement;
      let val = inputElement.value.replace(/\D/g, '');

      if (!val.startsWith('998')) {
        val = '998' + val;
      }

      val = val.slice(0, 12);

      let formatted = '+998';
      if (val.length > 3) formatted += ' ' + val.slice(3, 5);
      if (val.length > 5) formatted += ' ' + val.slice(5, 8);
      if (val.length > 8) formatted += ' ' + val.slice(8, 10);
      if (val.length > 10) formatted += ' ' + val.slice(10, 12);

      inputElement.value = formatted;

      const formArray = this.form.get('formArr') as FormArray;
      formArray
        .at(index)
        .get('phone')
        ?.setValue(formatted, { emitEvent: false });
    });
  });
}

  get formArr(): FormArray {
    return this.form.get('formArr') as FormArray;
  }

  add(): void {
    const newGroup = new FormGroup({
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\+998 \d{2} \d{3} \d{2} \d{2}$/),
      ]),
      text: new FormControl('', Validators.required),
    });
    this.formArr.push(this.formArr.getRawValue());
  }

  onSubmit(): void {
    console.log(this.form.getRawValue());
  }

  delete(): void {
    if (this.formArr.length > 0) {
      this.formArr.removeAt(this.formArr.length - 1);
    }
  }
}
