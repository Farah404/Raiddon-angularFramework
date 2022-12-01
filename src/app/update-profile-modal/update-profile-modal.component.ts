import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-update-profile-modal',
  templateUrl: './update-profile-modal.component.html',
  styleUrls: ['./update-profile-modal.component.scss']
})
export class UpdateProfileModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<UpdateProfileModalComponent>) { }

  ngOnInit(): void {
  }

}
