import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-preferences-modal',
  templateUrl: './preferences-modal.component.html',
  styleUrls: ['./preferences-modal.component.scss']
})
export class PreferencesModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<PreferencesModalComponent>) { }

  ngOnInit(): void {
  }

}
