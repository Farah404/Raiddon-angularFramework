import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidDetailsModalComponent } from './raid-details-modal.component';

describe('RaidDetailsModalComponent', () => {
  let component: RaidDetailsModalComponent;
  let fixture: ComponentFixture<RaidDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaidDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
