import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-skinning-modal',
  templateUrl: './skinning-modal.component.html',
  styleUrls: ['./skinning-modal.component.scss']
})
export class SkinningModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<SkinningModalComponent>) { }

  ngOnInit(): void {
  }

}
