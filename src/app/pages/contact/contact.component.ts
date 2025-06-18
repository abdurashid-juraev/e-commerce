import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormArray, // <-- FormArray'ni import qiling
  ReactiveFormsModule,
} from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import {NzMessageService} from 'ng-zorro-antd/message'
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterModule,
    NzSelectModule,
    NzRadioModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {

  private readonly formBuilder = inject(FormBuilder);
  private readonly messageService = inject(NzMessageService)
  public SurveyForm!: FormGroup;

  ngOnInit(): void {
    console.log('Init....!');
    this.initForm();
  }

  public initForm(): void {
    this.SurveyForm = this.formBuilder.group({
      questionText: [''],
      selectOption: ['Один выбор'],
      radioOptions: this.formBuilder.array([
        this.createRadioOption(), // Boshlang'ich bitta javob varianti
      ]),
    });
  }

  private createRadioOption(): FormGroup {
    return this.formBuilder.group({
      optionValue: ['',],
      answerText: [''],
    });
  }

  get radioOptions(): FormArray {
    return this.SurveyForm.get('radioOptions') as FormArray;
  }

  public addField(): void {
    this.radioOptions.push(this.createRadioOption());
    console.log("Yangi javob bloki qo'shildi!", this.radioOptions.controls);
  }

  public resetField(): void {
    this.SurveyForm.get('questionText')?.reset();
  }
  // Javob blokini o'chirish metodi (indeks bo'yicha)
  public removeField(index: number): void {
    if (this.radioOptions.length > 1) {
      // Kamida bitta variant qoldirish uchun
      this.radioOptions.removeAt(index);
      this.messageService.info(`${index}-indeksdagi javob bloki o'chirildi.`);
      console.log(`${index}-indeksdagi javob bloki o'chirildi.`);
    } else if (this.radioOptions.length === 1) {
      console.warn("Eng kamida bitta javob varianti bo'lishi kerak!");
      this.SurveyForm.get('answerText')?.reset();
    }
  }

  public onSubmit(): void {
    if (this.SurveyForm.valid) {
      console.log('Forma yuborildi!');
      console.log('Forma qiymati:', this.SurveyForm.value);
    } else {
      console.log("Forma noto'g'ri. Maydonlarni tekshiring.");
      this.SurveyForm.markAllAsTouched();
    }
  }
}
