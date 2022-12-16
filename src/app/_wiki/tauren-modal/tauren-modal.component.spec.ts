import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaurenModalComponent } from './tauren-modal.component';

describe('TaurenModalComponent', () => {
  let component: TaurenModalComponent;
  let fixture: ComponentFixture<TaurenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaurenModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaurenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
