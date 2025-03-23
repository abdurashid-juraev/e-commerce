import { Observable } from 'rxjs';
import { Users } from './../../../interface/interfaces';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UsersService } from '../../../service/users.service';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';

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
    NzInputModule,
  ],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export default class CrudComponent implements OnInit {
  data: any;
  constructor(private $userService: UsersService) {}
  listOfData: Users[] = [];
  value?: string;
  fullname?: string;
  age?: number;
  gender?: string;
  address?: string;
  email?: string;
  ngOnInit(): void {
    this.$userService.getUsers().subscribe((users) => {
      this.listOfData = users;
    });
  }
  size: any;

  add() {
    alert('Add');
  }

  delete() {
    alert('Delete');
  }
  //===========================================
  isVisible = false;
  listItem: any;
 

  
  edit(id: number): void {
  alert(id)
  }

  handleOk(): void {
   
    if (this.data && this.listItem) {
      Object.assign(this.listItem, this.data);
    }

    this.isVisible = false; // Modalni yopish
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false; // Modalni yopish
  }
}
