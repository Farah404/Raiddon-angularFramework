import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeModalComponent } from './gnome-modal.component';

describe('GnomeModalComponent', () => {
  let component: GnomeModalComponent;
  let fixture: ComponentFixture<GnomeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnomeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GnomeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
