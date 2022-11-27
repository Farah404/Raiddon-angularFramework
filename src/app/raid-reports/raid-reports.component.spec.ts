import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidReportsComponent } from './raid-reports.component';

describe('RaidReportsComponent', () => {
  let component: RaidReportsComponent;
  let fixture: ComponentFixture<RaidReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaidReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
