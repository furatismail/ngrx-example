import { createAction, props } from '@ngrx/store';
import { Car } from '../../shared/interfaces/car.interface';
import { ParkingRecord } from '../../shared/interfaces/parking-record.interface';

export const parkingCalculate = createAction(
  '[Parking calculator] Calculate',
  props<{ payload: Car }>()
);

export const parkingCalculateSuccess = createAction(
  '[Parking calculator] Calculate Success',
  props<{ payload: Array<ParkingRecord> }>()
);

export const parkingCalculateError = createAction(
  '[Parking calculator] Calculate Error',
  props<{ error: any }>()
);

export const bookOfferId = createAction(
  '[Parking calculator] Book offer',
  props<{ payload: string }>()
);
