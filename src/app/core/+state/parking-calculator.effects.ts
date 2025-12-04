// import { inject, Injectable } from '@angular/core';
// import { of } from 'rxjs';
// import { catchError, map, switchMap } from 'rxjs/operators';
// import * as CalculatorActions from './parking-calculator.actions';
// import { ParkingCalculatorService } from '../services/parking-calculator.service';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { ParkingRecord } from '../../shared/interfaces/parking-record.interface';

// @Injectable()
// export class ParkingCalculatorEffects {
//     private actions$ = inject(Actions)
//     private parkingCalculatorService = inject(ParkingCalculatorService)

//     calculateParking$ = createEffect(() =>
//         this.actions$.pipe(
//             ofType(CalculatorActions.parkingCalculate),
//             switchMap(action =>
//                 this.parkingCalculatorService.calculate(action.payload).pipe(
//                     map((offers: ParkingRecord[]) => CalculatorActions.parkingCalculateSuccess({ payload: offers })),
//                     catchError(error => of(CalculatorActions.parkingCalculateError({ error })))
//                 )
//             )
//         )
//     );
// }


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
