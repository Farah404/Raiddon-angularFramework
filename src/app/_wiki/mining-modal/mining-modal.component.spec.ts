import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningModalComponent } from './mining-modal.component';

describe('MiningModalComponent', () => {
  let component: MiningModalComponent;
  let fixture: ComponentFixture<MiningModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiningModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiningModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
