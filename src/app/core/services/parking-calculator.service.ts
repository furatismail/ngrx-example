import { Injectable } from '@angular/core';
import { Car } from '../../shared/interfaces/car.interface';
import { Observable, delay, of } from 'rxjs';
import { ParkingRecord } from '../../shared/interfaces/parking-record.interface';

@Injectable({
  providedIn: 'root'
})
export class ParkingCalculatorService {

  calculate(payload: Car): Observable<ParkingRecord[]> {
    // Mock data based on the payload
    const mockOffers: ParkingRecord[] = [
      {
        id: '1',
        createdAt: new Date().toISOString(),
        price: 15.50,
        parkingLot: 101,
        parkingHouse: 'Parking House A',
        parkingSpaceXXL: payload.carType === 'Bigger car (minivan)' || payload.carType === 'Bus',
        suitableDisabledPeople: false,
        discount: 0
      },
      {
        id: '2',
        createdAt: new Date().toISOString(),
        price: 20.00,
        parkingLot: 205,
        parkingHouse: 'Parking House B',
        parkingSpaceXXL: true,
        suitableDisabledPeople: true,
        discount: 10
      },
      {
        id: '3',
        createdAt: new Date().toISOString(),
        price: 12.00,
        parkingLot: 301,
        parkingHouse: 'Parking House C',
        parkingSpaceXXL: false,
        suitableDisabledPeople: false,
        discount: 5
      }
    ];

    // Return mock data with a delay to simulate network request
    return of(mockOffers).pipe(delay(500));
  }
}
