import { Component } from '@angular/core';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-task16',
  imports: [ReversePipe],
  template: `Reverse Machine: {{ word | reverse }}`,
})
export class Task16 {
  word = 'You are a champion';
}
