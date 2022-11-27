import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-apply-to-guild',
  templateUrl: './apply-to-guild.component.html',
  styleUrls: ['./apply-to-guild.component.scss']
})
export class ApplyToGuildComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<ApplyToGuildComponent>) {}

  ngOnInit(): void {
  }

}
