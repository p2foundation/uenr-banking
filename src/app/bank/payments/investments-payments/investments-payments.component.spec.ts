import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsPaymentsComponent } from './investments-payments.component';

describe('InvestmentsPaymentsComponent', () => {
  let component: InvestmentsPaymentsComponent;
  let fixture: ComponentFixture<InvestmentsPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentsPaymentsComponent]
    });
    fixture = TestBed.createComponent(InvestmentsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
