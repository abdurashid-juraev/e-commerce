import { Component } from "@angular/core";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconService } from 'ng-zorro-antd/icon';
import {

  DeleteOutline,
  DeleteTwoTone,
  EditOutline,
  EditTwoTone,
} from '@ant-design/icons-angular/icons';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
const icons = [DeleteTwoTone, EditTwoTone];
@Component({
  selector: 'app-admin-content',
  standalone: true,
  imports: [NzDividerModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.scss'],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class AdminContentComponent {
  constructor(private iconService: NzIconService) {
    this.iconService.addIcon(DeleteOutline, EditOutline);
  }
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
}