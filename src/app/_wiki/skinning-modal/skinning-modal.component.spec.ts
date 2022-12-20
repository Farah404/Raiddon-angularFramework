import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinningModalComponent } from './skinning-modal.component';

describe('SkinningModalComponent', () => {
  let component: SkinningModalComponent;
  let fixture: ComponentFixture<SkinningModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinningModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinningModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
