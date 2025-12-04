import { Car } from "../../shared/interfaces/car.interface";
import { ParkingRecord } from "../../shared/interfaces/parking-record.interface";

export interface ParkingCalculatorState {
    calculation: Car | undefined
    loading: boolean
    error: any
    offers: Array<ParkingRecord>,
    bookedOfferId: string | undefined
}