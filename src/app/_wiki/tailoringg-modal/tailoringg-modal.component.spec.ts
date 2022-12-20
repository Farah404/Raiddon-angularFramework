import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailoringgModalComponent } from './tailoringg-modal.component';

describe('TailoringgModalComponent', () => {
  let component: TailoringgModalComponent;
  let fixture: ComponentFixture<TailoringgModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailoringgModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailoringgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
