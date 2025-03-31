import { Observable } from 'rxjs';
import { Users } from './../../../interface/interfaces';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UsersService } from '../../../service/users.service';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    NzDividerModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
  ],

  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export default class CrudComponent implements OnInit {
  data: any;
  listItem: any;
  isVisible = false;

  listOfData: Users[] = [];
  /**
   *
   * @param $userService
   */
  constructor(
    private $userService: UsersService,
    private cdr: ChangeDetectorRef
  ) {}
  fb = inject(FormBuilder);
  /**
   *
   */
  form = this.fb.nonNullable.group({
    id: this.listOfData.length + 1,
    full_name: ['', Validators.required],
    age: [0, Validators.required],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', Validators.required],
  });
  /**
   *
   */
  ngOnInit(): void {
    this.$userService.getUsers().subscribe((item) => {
      this.listOfData = item;
      console.log(item);
    });
  }
  /**
   *
   */

  add(): void {
    const req = this.form.getRawValue();
    this.$userService.add(req).subscribe();
  }

  delete(id: number): void {
    this.listOfData = this.listOfData.filter((user) => user.id !== id);
  }
  //===========================================

  edit(id: number): void {
    alert(id);
  }

  handleOk(): void {
    if (this.data && this.listItem) {
      Object.assign(this.listItem, this.data);
    }

    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
