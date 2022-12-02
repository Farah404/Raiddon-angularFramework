import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileModalComponent } from './update-profile-modal.component';

describe('UpdateProfileModalComponent', () => {
  let component: UpdateProfileModalComponent;
  let fixture: ComponentFixture<UpdateProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfileModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
