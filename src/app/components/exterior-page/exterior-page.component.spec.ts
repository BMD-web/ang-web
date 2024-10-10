import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorPageComponent } from './exterior-page.component';

describe('ExteriorPageComponent', () => {
  let component: ExteriorPageComponent;
  let fixture: ComponentFixture<ExteriorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExteriorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExteriorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
