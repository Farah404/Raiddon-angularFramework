import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantingModalComponent } from './enchanting-modal.component';

describe('EnchantingModalComponent', () => {
  let component: EnchantingModalComponent;
  let fixture: ComponentFixture<EnchantingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnchantingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnchantingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
