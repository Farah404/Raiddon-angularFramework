import { Component, OnInit } from '@angular/core';
import { ApplyToGuildComponent } from '../apply-to-guild-modal/apply-to-guild.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-guild-details',
  templateUrl: './guild-details.component.html',
  styleUrls: ['./guild-details.component.scss']
})
export class GuildDetailsComponent implements OnInit {
  modalRef: MdbModalRef<ApplyToGuildComponent> | null = null;

  constructor(private modalService: MdbModalService) {}
  openModal() {
    this.modalRef = this.modalService.open(ApplyToGuildComponent)
  }
  ngOnInit(): void {
  }

}
