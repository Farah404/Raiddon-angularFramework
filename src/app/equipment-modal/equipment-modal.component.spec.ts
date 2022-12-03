import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentModalComponent } from './equipment-modal.component';

describe('EquipmentModalComponent', () => {
  let component: EquipmentModalComponent;
  let fixture: ComponentFixture<EquipmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
