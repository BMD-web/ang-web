import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalBookingButtonComponent } from './external-booking-button.component';

describe('ExternalBookingButtonComponent', () => {
  let component: ExternalBookingButtonComponent;
  let fixture: ComponentFixture<ExternalBookingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExternalBookingButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalBookingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
