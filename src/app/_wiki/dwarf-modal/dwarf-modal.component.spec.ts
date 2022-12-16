import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwarfModalComponent } from './dwarf-modal.component';

describe('DwarfModalComponent', () => {
  let component: DwarfModalComponent;
  let fixture: ComponentFixture<DwarfModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwarfModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwarfModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
