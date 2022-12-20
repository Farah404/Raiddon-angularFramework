import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingModalComponent } from './cooking-modal.component';

describe('CookingModalComponent', () => {
  let component: CookingModalComponent;
  let fixture: ComponentFixture<CookingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
