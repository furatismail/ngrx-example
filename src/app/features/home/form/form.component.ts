import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Field, form, required } from '@angular/forms/signals';
import { Car } from '../../../shared/interfaces/car.interface';
import { ParkingCalculatorFacade } from '../../../core/+state/parking-calculator.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [Field, JsonPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  floors = [
    '1. floor', '2. floor', '3. floor', '4. floor', '5. floor', '6. floor'
  ]

  private router = inject(Router)
  private parkingCalculatorFacade = inject(ParkingCalculatorFacade)

  carModel = signal<Car>({
    fullname: '',
    floor: '',
    carType: ''
  })

  carForm = form(this.carModel, (schemaPath) => {
    required(schemaPath.fullname, { message: 'Full Name is required.' }),
    required(schemaPath.floor, { message: 'Floor selection is required.' }),
    required(schemaPath.carType, { message: 'Car type selection is required.' })
  })

  ngOnInit() {
    // Subscribe to facade calculation$ to populate form if calculation exists
    this.parkingCalculatorFacade.calculation$.subscribe((calculation: Car | undefined) => {
      if (!!calculation) {
        this.carModel.set({ ...calculation });
      }
    });
  }

  onSubmit($event: SubmitEvent) {
    $event.preventDefault();

    if (this.carForm().valid()) {
      this.parkingCalculatorFacade.calculate(this.carModel());
      this.router.navigate(['/offers']);
    }
  }
}
