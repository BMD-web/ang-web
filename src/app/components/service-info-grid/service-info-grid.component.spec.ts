import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInfoGridComponent } from './service-info-grid.component';

describe('ServiceInfoGridComponent', () => {
  let component: ServiceInfoGridComponent;
  let fixture: ComponentFixture<ServiceInfoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceInfoGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceInfoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
