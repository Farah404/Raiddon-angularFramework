import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Messaging } from 'src/model/messaging';
import { MessagingService } from '../_services/messaging.service';
import { User } from 'src/model/raids';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-contact-player-modal',
  templateUrl: './contact-player-modal.component.html',
  styleUrls: ['./contact-player-modal.component.scss']
})
export class ContactPlayerModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<ContactPlayerModalComponent>,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private userService: UserService, private messagingService: MessagingService) { }

  id: number = this.route.snapshot.params.id;
  submitted = false;
  currentUser: any;
  userSender: User = {};
  userReceiver: User = {};
  messaging: Messaging = {};


  ngOnInit(): void {
    this.id = this.userService.id;
    this.getUser(this.id);
    this.getUserSender();
    this.currentUser = this.storageService.getUser();

  }

  getUser(id: number): void {
    this.userService.getUser(id)
      .subscribe({
        next: (data) => {
          this.userReceiver = data;
        },
        error: (e) => console.error(e)
      });
  }

  async getUserSender(): Promise<any> {
    this.userSender = await this.userService.getUser(this.storageService.getUser().id)
      .toPromise();
  }

  async createMessage(): Promise<any> {
    this.id = this.userService.id;
    this.userReceiver = await this.userService.getUser(this.id).toPromise();
    this.currentUser = this.storageService.getUser();

    const data = {
      id: null,
      userReceiver: this.userReceiver,
      userSender: this.userSender,
      subject: this.messaging.subject,
      message: this.messaging.message
    }

    this.messagingService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.modalRef.close()
        },
        error: (e) => console.error(e)
      });
  }
  newMessage(): void {
    this.submitted = false;
    this.messaging = {
      id: null,
      userReceiver: this.userReceiver,
      userSender: this.currentUser,
      subject: this.messaging.subject,
      message: this.messaging.message
    }
  }

}
