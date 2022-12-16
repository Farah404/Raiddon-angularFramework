import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraeneiModalComponent } from './draenei-modal.component';

describe('DraeneiModalComponent', () => {
  let component: DraeneiModalComponent;
  let fixture: ComponentFixture<DraeneiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraeneiModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraeneiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
