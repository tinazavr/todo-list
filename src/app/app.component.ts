import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<body>
    <h1>Welcome to {{ title }}!</h1>
    <app-input-button-unit> </app-input-button-unit>
  </body>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';
  ley = [1, '23 ', 'qwe dwe', { r: 18, s: 'nastya' }];
}
