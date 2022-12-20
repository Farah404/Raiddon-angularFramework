import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelCraftingModalComponent } from './jewel-crafting-modal.component';

describe('JewelCraftingModalComponent', () => {
  let component: JewelCraftingModalComponent;
  let fixture: ComponentFixture<JewelCraftingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JewelCraftingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelCraftingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
