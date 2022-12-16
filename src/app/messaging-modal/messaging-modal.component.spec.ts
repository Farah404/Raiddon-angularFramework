import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingModalComponent } from './messaging-modal.component';

describe('MessagingModalComponent', () => {
  let component: MessagingModalComponent;
  let fixture: ComponentFixture<MessagingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
