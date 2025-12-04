
import { inject } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as CalculatorActions from './parking-calculator.actions';
import { ParkingCalculatorService } from '../services/parking-calculator.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ParkingRecord } from '../../shared/interfaces/parking-record.interface';

export const calculateParkingEffect = createEffect((actions$ = inject(Actions), parkingCalculatorService = inject(ParkingCalculatorService)) =>
    actions$.pipe(
        ofType(CalculatorActions.parkingCalculate),
        switchMap(action =>
            parkingCalculatorService.calculate(action.payload).pipe(
                map((offers: ParkingRecord[]) => CalculatorActions.parkingCalculateSuccess({ payload: offers })),
                catchError(error => {
                    alert("Něco se pokazilo");
                    return of(CalculatorActions.parkingCalculateError({ error }))
                })
            )
        )
    ),
    { functional: true }
);







// import { Injectable } from '@angular/core';
// import { Action } from '@ngrx/store';
// import { Actions, ofType, createEffect } from '@ngrx/effects';
// import { of, Observable } from 'rxjs';
// import { catchError, map, switchMap } from 'rxjs/operators';
// import * as CalculatorActions from './parking-calculator.actions';
// import { ParkingCalculatorService } from '../services/parking-calculator.service';
// import { ParkingRecord } from '../../shared/interfaces/parking-record.interface';

// @Injectable()
// export class ParkingCalculatorEffects {

//   calculateParking$: Observable<Action> = createEffect(() =>
//     this.actions$.pipe(
//       ofType<CalculatorActions.ParkingCalculate>(
//         CalculatorActions.PARKING_CALCULATE
//       ),
//       switchMap(action =>
//         this.parkingCalculatorService.calculate(action.payload).pipe(
//           map((offers: ParkingRecord[]) =>
//             new CalculatorActions.ParkingCalculateSuccess(offers)
//           ),
//           catchError(error => {
//             alert('Něco se pokazilo');
//             return of(new CalculatorActions.ParkingCalculateError(error));
//           })
//         )
//       )
//     )
//   );

//   constructor(
//     private actions$: Actions,
//     private parkingCalculatorService: ParkingCalculatorService
//   ) {}
// }
