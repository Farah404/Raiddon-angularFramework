import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Messaging } from 'src/model/messaging';
import { MessagingService } from '../_services/messaging.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-messaging-modal',
  templateUrl: './messaging-modal.component.html',
  styleUrls: ['./messaging-modal.component.scss']
})
export class MessagingModalComponent implements OnInit {
  currentUser: any;
  allMessages: Messaging[];
  filteredMessages: Messaging [];

  constructor(public modalRef: MdbModalRef<MessagingModalComponent>,
    private storageService: StorageService, private messagingService: MessagingService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.retriveMessages();
  }

  retriveMessages(): void {
    this.messagingService.getAll()
    .subscribe({
      next: (data) =>{
        this.allMessages = data;
        this.filteredMessages = this.allMessages.filter(f => f.userReceiver.id == this.currentUser.id)
      }
    });
  }

}
