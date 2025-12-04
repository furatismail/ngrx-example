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













// import { ParkingCalculatorState } from './parking-calculator.state';
// import * as CalculatorActions from './parking-calculator.actions';

// export const initialState: ParkingCalculatorState = {
//   calculation: undefined,
//   loading: false,
//   offers: [],
//   error: undefined,
//   bookedOfferId: undefined
// };

// export function reducer(
//   state: ParkingCalculatorState = initialState,
//   action: CalculatorActions.ParkingActions
// ): ParkingCalculatorState {
//   switch (action.type) {

//     case CalculatorActions.PARKING_CALCULATE:
//       return {
//         ...state,
//         calculation: action.payload,
//         loading: true
//       };

//     case CalculatorActions.PARKING_CALCULATE_SUCCESS:
//       return {
//         ...state,
//         offers: action.payload,
//         loading: false
//       };

//     case CalculatorActions.PARKING_CALCULATE_ERROR:
//       return {
//         ...state,
//         error: action.error,
//         loading: false
//       };

//     case CalculatorActions.BOOK_OFFER_ID:
//       return {
//         ...state,
//         bookedOfferId: action.payload
//       };

//     default:
//       return state;
//   }
// }

