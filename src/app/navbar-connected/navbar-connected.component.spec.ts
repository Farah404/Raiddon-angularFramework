import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarConnectedComponent } from './navbar-connected.component';

describe('NavbarConnectedComponent', () => {
  let component: NavbarConnectedComponent;
  let fixture: ComponentFixture<NavbarConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarConnectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
