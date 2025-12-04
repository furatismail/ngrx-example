import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ParkingCalculatorFacade } from '../../../core/+state/parking-calculator.facade';
import { ParkingRecord } from '../../../shared/interfaces/parking-record.interface';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  offers$: Observable<ParkingRecord[]> = of([]);
  loading$: Observable<boolean> = of(true);

  private parkingCalculatorFacade = inject(ParkingCalculatorFacade)
  private router = inject(Router)

  ngOnInit() {
    this.loading$ = this.parkingCalculatorFacade.loading$;
    this.offers$ = this.parkingCalculatorFacade.offers$;
  }

  book(id: string) {
    this.parkingCalculatorFacade.bookOfferId(id);
    this.router.navigate(['/summary'])
  }
}
