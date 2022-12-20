import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-alchemy-modal',
  templateUrl: './alchemy-modal.component.html',
  styleUrls: ['./alchemy-modal.component.scss']
})
export class AlchemyModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<AlchemyModalComponent>) { }

  ngOnInit(): void {
  }

}
