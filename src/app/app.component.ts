import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';
  todoList: TodoItem[] = [
    { title: 'install Node JS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];
  addItem(title: string) {
    this.todoList.push({ title: title });
  }
}
