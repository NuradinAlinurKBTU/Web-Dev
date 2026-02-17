import { Component, inject} from '@angular/core';
import {CarService} from './car.service'

@Component({
  selector: 'app-task14',
  template: `<p> {{ carService.getCars() }} </p>`,
})
export class Task14 {
  carService = inject(CarService);
}
