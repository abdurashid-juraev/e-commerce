import { Component } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
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
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  size: any;
  print() {
    throw new Error('Method not implemented.');
  }
  add() {
    throw new Error('Method not implemented.');
  }
  edit() {
    throw new Error('Method not implemented.');
  }
  delete() {
    throw new Error('Method not implemented.');
  }
}