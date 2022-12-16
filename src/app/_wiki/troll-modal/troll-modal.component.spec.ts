import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrollModalComponent } from './troll-modal.component';

describe('TrollModalComponent', () => {
  let component: TrollModalComponent;
  let fixture: ComponentFixture<TrollModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrollModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrollModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
