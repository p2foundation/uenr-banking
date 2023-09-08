import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrialAreaComponent } from './free-trial-area.component';

describe('FreeTrialAreaComponent', () => {
  let component: FreeTrialAreaComponent;
  let fixture: ComponentFixture<FreeTrialAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeTrialAreaComponent]
    });
    fixture = TestBed.createComponent(FreeTrialAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
