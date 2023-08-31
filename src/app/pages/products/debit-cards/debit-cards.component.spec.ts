import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCardsComponent } from './debit-cards.component';

describe('DebitCardsComponent', () => {
  let component: DebitCardsComponent;
  let fixture: ComponentFixture<DebitCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebitCardsComponent]
    });
    fixture = TestBed.createComponent(DebitCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
