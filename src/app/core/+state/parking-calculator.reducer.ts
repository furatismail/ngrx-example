import { createReducer, on } from '@ngrx/store';
import * as CalculatorActions from './parking-calculator.actions';
import { ParkingCalculatorState } from './parking-calculator.state';

export const initialState: ParkingCalculatorState = {
    calculation: undefined,
    loading: false,
    offers: [],
    error: undefined,
    bookedOfferId: undefined
};

export const reducer = createReducer(
    initialState,
    on(CalculatorActions.parkingCalculate, (state, action) => {
        return ({
            ...state,
            calculation: action.payload,
            loading: true
        })
    }),
    on(CalculatorActions.parkingCalculateSuccess, (state, action) => ({
        ...state,
        offers: action.payload,
        loading: false
    })),
    on(CalculatorActions.parkingCalculateError, (state, action) => ({
        ...state,
        error: action.error,
        loading: false
    })),
    on(CalculatorActions.bookOfferId, (state, action) => {
        return ({
            ...state,
            bookedOfferId: action.payload,
        })
    }),
);
