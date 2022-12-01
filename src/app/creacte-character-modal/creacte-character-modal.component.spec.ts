import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacteCharacterModalComponent } from './creacte-character-modal.component';

describe('CreacteCharacterModalComponent', () => {
  let component: CreacteCharacterModalComponent;
  let fixture: ComponentFixture<CreacteCharacterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacteCharacterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacteCharacterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
