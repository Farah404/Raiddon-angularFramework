import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildDetailsComponent } from './guild-details.component';

describe('GuildDetailsComponent', () => {
  let component: GuildDetailsComponent;
  let fixture: ComponentFixture<GuildDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuildDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
