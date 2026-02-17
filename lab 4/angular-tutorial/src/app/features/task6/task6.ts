import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  template: `
    <section (mouseover)="showSecretMessage()">
  {{ message }}
</section>
  `,
})
export class Task6 {
  message = '';

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
}


