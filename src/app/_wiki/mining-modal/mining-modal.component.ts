import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-mining-modal',
  templateUrl: './mining-modal.component.html',
  styleUrls: ['./mining-modal.component.scss']
})
export class MiningModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<MiningModalComponent>) { }

  ngOnInit(): void {
  }

}
