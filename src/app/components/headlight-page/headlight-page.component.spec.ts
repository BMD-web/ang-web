import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlightPageComponent } from './headlight-page.component';

describe('HeadlightPageComponent', () => {
  let component: HeadlightPageComponent;
  let fixture: ComponentFixture<HeadlightPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadlightPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadlightPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
