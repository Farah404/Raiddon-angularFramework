import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRaidModalComponent } from './create-raid-modal.component';

describe('CreateRaidModalComponent', () => {
  let component: CreateRaidModalComponent;
  let fixture: ComponentFixture<CreateRaidModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRaidModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRaidModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
