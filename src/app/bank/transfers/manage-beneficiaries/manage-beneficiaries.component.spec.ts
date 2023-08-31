import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBeneficiariesComponent } from './manage-beneficiaries.component';

describe('ManageBeneficiariesComponent', () => {
  let component: ManageBeneficiariesComponent;
  let fixture: ComponentFixture<ManageBeneficiariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageBeneficiariesComponent]
    });
    fixture = TestBed.createComponent(ManageBeneficiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
