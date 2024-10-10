import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingEstimateCardComponent } from './booking-estimate-card.component';

describe('BookingEstimateCardComponent', () => {
  let component: BookingEstimateCardComponent;
  let fixture: ComponentFixture<BookingEstimateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingEstimateCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingEstimateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
