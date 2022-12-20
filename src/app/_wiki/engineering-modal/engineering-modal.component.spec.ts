import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringModalComponent } from './engineering-modal.component';

describe('EngineeringModalComponent', () => {
  let component: EngineeringModalComponent;
  let fixture: ComponentFixture<EngineeringModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineeringModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
