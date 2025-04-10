import { Component } from "@angular/core";
import { TodoListItem } from "./todo-list-item/todo-list-item.component";

@Component({
  standalone: true,
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrl: './draft.component.scss',
  imports: [TodoListItem],
})
export class DraftComponent {
  todos = [
    { id: 1, fullname: 'John Doe', job: 'Doctor' },
    { id: 2, fullname: 'Jane Smith', job: 'Engineer' },
    { id: 3, fullname: 'Ali Valiyev', job: 'Teacher' },
    { id: 4, fullname: 'Sara Karimova', job: 'Designer' },
    { id: 5, fullname: 'Tom Hardy', job: 'Lawyer' },
    { id: 6, fullname: 'Emily Watson', job: 'Nurse' },
    { id: 7, fullname: 'Bruce Wayne', job: 'Businessman' },
    { id: 8, fullname: 'Clark Kent', job: 'Journalist' },
    { id: 9, fullname: 'Peter Parker', job: 'Photographer' },
    { id: 10, fullname: 'Tony Stark', job: 'Inventor' },
  ];
}