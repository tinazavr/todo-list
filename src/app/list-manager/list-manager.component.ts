import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss'],
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = [
    { title: 'install Node JS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];
  constructor() {}
  ngOnInit(): void {}

  addItem(title: string) {
    this.todoList.push({ title: title });
  }
}
