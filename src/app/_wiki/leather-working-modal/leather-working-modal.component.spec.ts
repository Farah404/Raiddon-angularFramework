import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeatherWorkingModalComponent } from './leather-working-modal.component';

describe('LeatherWorkingModalComponent', () => {
  let component: LeatherWorkingModalComponent;
  let fixture: ComponentFixture<LeatherWorkingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeatherWorkingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeatherWorkingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
