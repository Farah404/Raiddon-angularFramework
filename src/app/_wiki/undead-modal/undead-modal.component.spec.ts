import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndeadModalComponent } from './undead-modal.component';

describe('UndeadModalComponent', () => {
  let component: UndeadModalComponent;
  let fixture: ComponentFixture<UndeadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndeadModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UndeadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
