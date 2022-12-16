import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanModalComponent } from './human-modal.component';

describe('HumanModalComponent', () => {
  let component: HumanModalComponent;
  let fixture: ComponentFixture<HumanModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
