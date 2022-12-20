import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildManagementComponent } from './guild-management.component';

describe('GuildManagementComponent', () => {
  let component: GuildManagementComponent;
  let fixture: ComponentFixture<GuildManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuildManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
