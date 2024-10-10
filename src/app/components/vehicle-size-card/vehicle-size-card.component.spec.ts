import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSizeCardComponent } from './vehicle-size-card.component';

describe('VehicleSizeCardComponent', () => {
  let component: VehicleSizeCardComponent;
  let fixture: ComponentFixture<VehicleSizeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleSizeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleSizeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
