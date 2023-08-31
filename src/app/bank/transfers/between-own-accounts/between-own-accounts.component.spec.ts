import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweenOwnAccountsComponent } from './between-own-accounts.component';

describe('BetweenOwnAccountsComponent', () => {
  let component: BetweenOwnAccountsComponent;
  let fixture: ComponentFixture<BetweenOwnAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BetweenOwnAccountsComponent]
    });
    fixture = TestBed.createComponent(BetweenOwnAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
