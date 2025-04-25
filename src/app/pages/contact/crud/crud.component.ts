import { Observable } from 'rxjs';
import { UserPost, Users } from './../../../interface/interfaces';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CrudComponent implements OnInit {
  data: any;
  listItem: any;
  isVisible = false;

  listOfData: Users[] = [];
  dataSource: any;
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
    full_name: ['', Validators.required],
    age: [null as number | null, Validators.required],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', Validators.required],
  });
  /**
   *
   */
  ngOnInit(): void {
    this.$userService.getUsers(0).subscribe((item) => {
      this.listOfData = item;
      this.cdr.markForCheck();
      //console.log(this.listOfData.length);
    });
  }
  /**
   *
   */

  add(): void {
    const newUser: UserPost = this.form.getRawValue();
    if (this.form.valid) {
      this.$userService.add(newUser).subscribe({
        next: (item) => {
          if (Array.isArray(item)) {
            this.listOfData = [...this.listOfData, ...item];
          } else {
            this.listOfData = [...this.listOfData, item];
          }
          this.cdr.markForCheck();
          this.form.reset();
          this.isVisible = false;
        },
        error: (err) => {
          console.error('Error adding user:', err);
        },
      });
    }
  }

  delete(id: number): void {
    this.$userService.delete(id).subscribe(() => {
      this.listOfData = this.listOfData.filter((item) => item.id !== id);
      this.cdr.markForCheck();
    });
  }

  //===========================================

  edit(id: number): void {
    this.$userService.edit(id).subscribe({
      next: (user) => {
        if (user) {
          this.listItem = user;
          this.form.patchValue(user);
          window.scrollTo({ top: 0, behavior: 'smooth' }); // forma
          this.cdr.markForCheck();
        }
      },
      error: (err) => {
        console.error(`Error fetching user with ID ${id}:`, err);
      },
    });
  }

  handleSave(): void {
    if (this.listItem) {
      this.update();
    } else {
      this.add();
    }
  }

  update(): void {
    if (this.form.valid && this.listItem?.id) {
      const updatedUser: UserPost = this.form.getRawValue();
      this.$userService.update(this.listItem.id, updatedUser).subscribe({
        next: () => {
          const index = this.listOfData.findIndex(
            (u) => u.id === this.listItem.id
          );
          if (index !== -1) {
            this.listOfData[index] = {
              ...this.listOfData[index],
              ...updatedUser,
            };
          }
          this.form.reset();
          this.listItem = null;
          this.cdr.markForCheck();
        },
        error: (err) => {
          console.error('Error updating user:', err);
        },
      });
    }
  }


}
