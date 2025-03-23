import { Observable } from 'rxjs';
import { Users } from './../../../interface/interfaces';
import { Component, OnInit } from '@angular/core';
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
export default class CrudComponent implements OnInit {
  constructor(private $userService: UsersService) {}
  listOfData: Users[] = [];
  ngOnInit(): void {
    this.$userService.getUsers().subscribe((users)=>{
      this.listOfData = users
      console.log(this.listOfData);
      
    })
  }
  size: any;



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
