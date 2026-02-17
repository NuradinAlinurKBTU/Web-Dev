import { Component } from '@angular/core';
import { Child } from './child'

@Component({
  selector: 'app-task8',
  imports: [Child],
  template: `
  <app-child (addItemEvent)="addItem($event)"/>
  <p>🐢 all the way down {{ items.length }}</p>`
})
export class Task8 {
  items = new Array();
  addItem(item: string) {
    this.items.push(item);
  }
}
