import { Component } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-task7',
  template: ` <app-user name="Simran" /> `,
  imports: [User],
})
export class Task7 {}
