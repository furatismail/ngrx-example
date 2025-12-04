import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ParkingCalculatorState } from './parking-calculator.state';
import { ParkingRecord } from '../../shared/interfaces/parking-record.interface';

// Feature selector
export const selectParkingCalculatorState = createFeatureSelector<ParkingCalculatorState>('parkingCalculator');

// Selector for offers
export const selectCalculation = createSelector(
    selectParkingCalculatorState,
    (state: ParkingCalculatorState) => state.calculation
);

// Selector for offers
export const selectOffers = createSelector(
    selectParkingCalculatorState,
    (state: ParkingCalculatorState) => state.offers
);

// Selector for loading
export const selectLoading = createSelector(
    selectParkingCalculatorState,
    (state: ParkingCalculatorState) => state.loading
);

// Selector for bookedOfferId
export const selectBookedOfferId = createSelector(
    selectParkingCalculatorState,
    (state: ParkingCalculatorState) => state.bookedOfferId
);

export const selectBookedOffer = createSelector(
    selectParkingCalculatorState,
    (state: ParkingCalculatorState) => {
        const bookOfferId = state.bookedOfferId;
        console.log('bookOfferId', bookOfferId);

        if (!!state?.bookedOfferId && state?.offers?.length > 0) {
            const bookedOfferIndex = state.offers.findIndex((offer: ParkingRecord) => {
                return offer.id === bookOfferId;  // Ensure the function returns a boolean value
            });

            if (bookedOfferIndex !== -1) {  // Check if the index is valid
                return state.offers[bookedOfferIndex];
            }
        }

        throw Error('Unable to find offer')
    }
);









// import { ParkingCalculatorState } from './parking-calculator.state';
// import { ParkingRecord } from '../../shared/interfaces/parking-record.interface';
// import { AppState } from '../app.state'; // adjust if needed

// // Feature access
// export const selectParkingCalculatorState = (state: AppState): ParkingCalculatorState =>
//   state.parkingCalculator;

// // Simple selectors
// export const selectCalculation = (state: AppState) =>
//   state.parkingCalculator.calculation;

// export const selectOffers = (state: AppState) =>
//   state.parkingCalculator.offers;

// export const selectLoading = (state: AppState) =>
//   state.parkingCalculator.loading;

// export const selectBookedOfferId = (state: AppState) =>
//   state.parkingCalculator.bookedOfferId;

// // Computed selector (manual)
// export const selectBookedOffer = (state: AppState): ParkingRecord | undefined => {
//   const feature = state.parkingCalculator;

//   const bookedOfferId = feature.bookedOfferId;

//   if (bookedOfferId && feature.offers?.length > 0) {
//     const offer = feature.offers.find((o) => o.id === bookedOfferId);
//     if (offer) return offer;
//   }

//   throw Error('Unable to find offer');
// };
