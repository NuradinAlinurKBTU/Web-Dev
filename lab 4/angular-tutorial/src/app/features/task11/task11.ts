import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task11',
  template: `
    <p>Username: {{username}}</p>
    p>Framework: {{favoriteFramework}}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class Task11 {
  favoriteFramework = '';
  username = 'youngtech';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
