import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingCalculatorFacade } from '../../../core/+state/parking-calculator.facade';
import { ParkingRecord } from '../../../shared/interfaces/parking-record.interface';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
  bookedOffer$!: Observable<ParkingRecord>;

  private parkingCalculatorFacade = inject(ParkingCalculatorFacade)

  ngOnInit() {
    this.bookedOffer$ = this.parkingCalculatorFacade.bookedOffer$ as Observable<ParkingRecord>;
  }

}
