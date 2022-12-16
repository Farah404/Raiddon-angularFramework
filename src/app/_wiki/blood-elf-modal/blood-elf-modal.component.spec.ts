import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodElfModalComponent } from './blood-elf-modal.component';

describe('BloodElfModalComponent', () => {
  let component: BloodElfModalComponent;
  let fixture: ComponentFixture<BloodElfModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodElfModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodElfModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
