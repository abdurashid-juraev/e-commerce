import { Component, Input } from '@angular/core';

// todo-list-item.component.ts
@Component({
  standalone: true,
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss',
})
export class TodoListItem {
  
  isComplete = false;
  @Input() todos: [] = [];
  
  completeTask() {
    this.isComplete = true;
  }

  // updateTitle(newTitle: string) {
  //   this.taskTitle = newTitle;
  // }
}
