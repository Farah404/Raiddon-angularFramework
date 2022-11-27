import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-raid-reports',
  templateUrl: './raid-reports.component.html',
  styleUrls: ['./raid-reports.component.scss']
})
export class RaidReportsComponent implements OnInit {
  raidReportsData=null;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getReports().subscribe((data) => {
      this.raidReportsData = data;
    })
  }

}
