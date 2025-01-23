import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCardComponent implements AfterViewInit {
  @Input({ required: true }) post!: number;

  // parent komponent uchun event
  // @Output() counterToParent = new EventEmitter<number>();
  counterToParent = output<number>();
  // event parametr
  // n: number = 1 + 1;

  // child tomondan jo'natadigan event
  sendToParent(n: number = 1 + 1) {
    this.counterToParent.emit(n);
  }

  //RxJs FromEvent--------------------------
  count = 0;
  @ViewChild('btn') buttonRef: ElementRef | any;

  ngAfterViewInit(): void {
    fromEvent(this.buttonRef.nativeElement, 'click').subscribe(() => {
      this.count++;
    });
  }

  //---------------------------RxJs BehaviorSubject-----------
  // isChecked: boolean = false;
  private counterSubject = new BehaviorSubject<number>(0);
  counter$ = this.counterSubject.asObservable();
  increment() {
    if (this.counterSubject.value % 2 === 1) {
      // this.isChecked = true;
    } else {
      // this.isChecked = false;
    }
    this.counterSubject.next(this.counterSubject.value + 1);
  }
  decrement() {
    if (this.counterSubject.value > 0)
      this.counterSubject.next(this.counterSubject.value - 1);
    if (
      this.counterSubject.value % 2 === 1 ||
      this.counterSubject.value === 0
    ) {
      // this.isChecked = false;
    } else {
      // this.isChecked = true;
    }
  }
  //---------------------------------------------------------
}
