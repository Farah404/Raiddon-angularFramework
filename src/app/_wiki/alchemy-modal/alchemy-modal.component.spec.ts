import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlchemyModalComponent } from './alchemy-modal.component';

describe('AlchemyModalComponent', () => {
  let component: AlchemyModalComponent;
  let fixture: ComponentFixture<AlchemyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlchemyModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlchemyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
