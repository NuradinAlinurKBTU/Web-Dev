import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task10',
  template: `
    <p>Username: {{ username }}</p>
    <p>{{username}}'s favorite framework: {{favoriteFramework}}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework>
    </label>
  `,
  imports: [FormsModule],
})
export class Task10 {
  favoriteFramework = '';
  username = 'youngtech';
}
