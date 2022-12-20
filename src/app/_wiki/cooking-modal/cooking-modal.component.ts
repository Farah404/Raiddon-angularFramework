import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-cooking-modal',
  templateUrl: './cooking-modal.component.html',
  styleUrls: ['./cooking-modal.component.scss']
})
export class CookingModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<CookingModalComponent>) { }

  ngOnInit(): void {
  }

}
