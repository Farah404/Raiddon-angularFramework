import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyToGuildComponent } from './apply-to-guild.component';

describe('ApplyToGuildComponent', () => {
  let component: ApplyToGuildComponent;
  let fixture: ComponentFixture<ApplyToGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyToGuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyToGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
