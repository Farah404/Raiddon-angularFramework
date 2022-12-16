import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingApplicationsModalComponent } from './pending-applications-modal.component';

describe('PendingApplicationsModalComponent', () => {
  let component: PendingApplicationsModalComponent;
  let fixture: ComponentFixture<PendingApplicationsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingApplicationsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingApplicationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
