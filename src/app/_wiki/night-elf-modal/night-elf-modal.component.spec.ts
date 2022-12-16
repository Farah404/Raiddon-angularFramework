import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightElfModalComponent } from './night-elf-modal.component';

describe('NightElfModalComponent', () => {
  let component: NightElfModalComponent;
  let fixture: ComponentFixture<NightElfModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightElfModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightElfModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
