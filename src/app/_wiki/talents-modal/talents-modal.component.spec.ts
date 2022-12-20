import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsModalComponent } from './talents-modal.component';

describe('TalentsModalComponent', () => {
  let component: TalentsModalComponent;
  let fixture: ComponentFixture<TalentsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
