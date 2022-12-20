import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbalismModalComponent } from './herbalism-modal.component';

describe('HerbalismModalComponent', () => {
  let component: HerbalismModalComponent;
  let fixture: ComponentFixture<HerbalismModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerbalismModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerbalismModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
