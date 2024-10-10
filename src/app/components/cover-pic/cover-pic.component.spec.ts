import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverPicComponent } from './cover-pic.component';

describe('CoverPicComponent', () => {
  let component: CoverPicComponent;
  let fixture: ComponentFixture<CoverPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoverPicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
