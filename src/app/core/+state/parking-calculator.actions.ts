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






// import { Action } from '@ngrx/store';
// import { Car } from '../../shared/interfaces/car.interface';
// import { ParkingRecord } from '../../shared/interfaces/parking-record.interface';

// // Action Types
// export const PARKING_CALCULATE = '[Parking calculator] Calculate';
// export const PARKING_CALCULATE_SUCCESS = '[Parking calculator] Calculate Success';
// export const PARKING_CALCULATE_ERROR = '[Parking calculator] Calculate Error';
// export const BOOK_OFFER_ID = '[Parking calculator] Book offer';

// // Action Classes

// export class ParkingCalculate implements Action {
//   readonly type = PARKING_CALCULATE;
//   constructor(public payload: Car) {}
// }

// export class ParkingCalculateSuccess implements Action {
//   readonly type = PARKING_CALCULATE_SUCCESS;
//   constructor(public payload: ParkingRecord[]) {}
// }

// export class ParkingCalculateError implements Action {
//   readonly type = PARKING_CALCULATE_ERROR;
//   constructor(public error: any) {}
// }

// export class BookOfferId implements Action {
//   readonly type = BOOK_OFFER_ID;
//   constructor(public payload: string) {}
// }

// // Union of all actions
// export type ParkingActions =
//   | ParkingCalculate
//   | ParkingCalculateSuccess
//   | ParkingCalculateError
//   | BookOfferId;
