import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionHouseComponent } from './auction-house.component';

describe('AuctionHouseComponent', () => {
  let component: AuctionHouseComponent;
  let fixture: ComponentFixture<AuctionHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
