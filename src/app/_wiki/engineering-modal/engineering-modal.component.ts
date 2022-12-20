import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-engineering-modal',
  templateUrl: './engineering-modal.component.html',
  styleUrls: ['./engineering-modal.component.scss']
})
export class EngineeringModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<EngineeringModalComponent>) { }

  ngOnInit(): void {
  }

}
