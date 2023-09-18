import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolFeesComponent } from './school-fees.component';

describe('SchoolFeesComponent', () => {
  let component: SchoolFeesComponent;
  let fixture: ComponentFixture<SchoolFeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolFeesComponent]
    });
    fixture = TestBed.createComponent(SchoolFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
