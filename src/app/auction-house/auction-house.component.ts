import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';


@Component({
  selector: 'app-auction-house',
  templateUrl: './auction-house.component.html',
  styleUrls: ['./auction-house.component.scss']
})
export class AuctionHouseComponent implements OnInit {
  auctionHousesIndexData=null;
  allianceAuctionHouseData=null;
  hordeAuctionHouseData=null;


  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getAuctionHouseIndex().subscribe((data) => {
      this.auctionHousesIndexData = data;
    })

    this.api.getAllianceAuctionHouse().subscribe((data) => {
      this.allianceAuctionHouseData = data;
    })

    this.api.getHordeAuctionHouse().subscribe((data) => {
      this.hordeAuctionHouseData = data;
    })
  }

}
