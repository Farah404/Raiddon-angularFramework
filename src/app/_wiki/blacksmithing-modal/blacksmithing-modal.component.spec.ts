import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacksmithingModalComponent } from './blacksmithing-modal.component';

describe('BlacksmithingModalComponent', () => {
  let component: BlacksmithingModalComponent;
  let fixture: ComponentFixture<BlacksmithingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacksmithingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlacksmithingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
