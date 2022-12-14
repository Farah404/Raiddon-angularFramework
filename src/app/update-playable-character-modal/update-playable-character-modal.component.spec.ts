import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlayableCharacterModalComponent } from './update-playable-character-modal.component';

describe('UpdatePlayableCharacterModalComponent', () => {
  let component: UpdatePlayableCharacterModalComponent;
  let fixture: ComponentFixture<UpdatePlayableCharacterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlayableCharacterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePlayableCharacterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
