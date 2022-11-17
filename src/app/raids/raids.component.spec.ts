import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidsComponent } from './raids.component';

describe('RaidsComponent', () => {
  let component: RaidsComponent;
  let fixture: ComponentFixture<RaidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
