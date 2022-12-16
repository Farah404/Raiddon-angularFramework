import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyToRaidModalComponent } from './apply-to-raid-modal.component';

describe('ApplyToRaidModalComponent', () => {
  let component: ApplyToRaidModalComponent;
  let fixture: ComponentFixture<ApplyToRaidModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyToRaidModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyToRaidModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
