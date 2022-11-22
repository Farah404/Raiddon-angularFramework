import { Component, OnInit } from '@angular/core';
import { ContactPlayerModalComponent } from '../contact-player-modal/contact-player-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {
  modalRef: MdbModalRef<ContactPlayerModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}
  openModal() {
    this.modalRef = this.modalService.open(ContactPlayerModalComponent)
  }

  ngOnInit(): void {
  }

}
