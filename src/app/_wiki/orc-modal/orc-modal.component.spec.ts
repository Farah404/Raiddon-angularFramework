import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcModalComponent } from './orc-modal.component';

describe('OrcModalComponent', () => {
  let component: OrcModalComponent;
  let fixture: ComponentFixture<OrcModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrcModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
