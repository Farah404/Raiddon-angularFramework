import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesModalComponent } from './classes-modal.component';

describe('ClassesModalComponent', () => {
  let component: ClassesModalComponent;
  let fixture: ComponentFixture<ClassesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
