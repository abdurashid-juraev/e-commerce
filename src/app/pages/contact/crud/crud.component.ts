import { Users } from './../../../interface/interfaces';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UsersService } from '../../../service/users.service';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
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
  ],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export default class CrudComponent {
  constructor(private $userService: UsersService) {}
  listOfData: Users[] = [];
  size: any;

  // getUser({
    // this.listOfData = this.$userService
  // })

  add() {
    alert('Add');
  }
  edit() {
    alert('Edit');
  }
  delete() {
    alert('Delete');
  }
}
