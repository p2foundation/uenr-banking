import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardPaymentsComponent } from './credit-card-payments.component';

describe('CreditCardPaymentsComponent', () => {
  let component: CreditCardPaymentsComponent;
  let fixture: ComponentFixture<CreditCardPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCardPaymentsComponent]
    });
    fixture = TestBed.createComponent(CreditCardPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
