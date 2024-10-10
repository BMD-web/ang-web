import { TestBed } from '@angular/core/testing';

import { BookingEstimateService } from './booking-estimate.service';

describe('BookingEstimateService', () => {
  let service: BookingEstimateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingEstimateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
