import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-fishing-modal',
  templateUrl: './fishing-modal.component.html',
  styleUrls: ['./fishing-modal.component.scss']
})
export class FishingModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<FishingModalComponent>) { }

  ngOnInit(): void {
  }

}
