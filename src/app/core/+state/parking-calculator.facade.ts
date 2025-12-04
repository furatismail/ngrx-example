import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Car } from '../../shared/interfaces/car.interface';
import * as ParkingCalculatorActions from './parking-calculator.actions';
import { selectBookedOffer, selectCalculation, selectLoading, selectOffers } from './parking-calculator.selectors';
import { ParkingCalculatorState } from './parking-calculator.state';

@Injectable({
  providedIn: 'root'
})
export class ParkingCalculatorFacade {
  private readonly store = inject(Store<ParkingCalculatorState>)

  calculation$ = this.store.pipe(select(selectCalculation));
  offers$ = this.store.pipe(select(selectOffers));
  loading$ = this.store.pipe(select(selectLoading));
  bookedOffer$ = this.store.pipe(select(selectBookedOffer))

  calculate(payload: Car) {
    this.store.dispatch(ParkingCalculatorActions.parkingCalculate({ payload }))
  }

  bookOfferId(id: string) {
    this.store.dispatch(ParkingCalculatorActions.bookOfferId({payload: id}))
  }
}
