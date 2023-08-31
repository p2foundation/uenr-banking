import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UenrMobileComponent } from './uenr-mobile.component';

describe('UenrMobileComponent', () => {
  let component: UenrMobileComponent;
  let fixture: ComponentFixture<UenrMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UenrMobileComponent]
    });
    fixture = TestBed.createComponent(UenrMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
