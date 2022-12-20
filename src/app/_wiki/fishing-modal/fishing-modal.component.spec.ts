import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingModalComponent } from './fishing-modal.component';

describe('FishingModalComponent', () => {
  let component: FishingModalComponent;
  let fixture: ComponentFixture<FishingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
