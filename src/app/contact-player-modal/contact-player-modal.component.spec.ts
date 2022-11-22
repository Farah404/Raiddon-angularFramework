import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPlayerModalComponent } from './contact-player-modal.component';

describe('ContactPlayerModalComponent', () => {
  let component: ContactPlayerModalComponent;
  let fixture: ComponentFixture<ContactPlayerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPlayerModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPlayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
