import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalTransfersComponent } from './local-transfers.component';

describe('LocalTransfersComponent', () => {
  let component: LocalTransfersComponent;
  let fixture: ComponentFixture<LocalTransfersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalTransfersComponent]
    });
    fixture = TestBed.createComponent(LocalTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
