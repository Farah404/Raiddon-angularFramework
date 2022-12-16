import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { EventBusService } from '../_shared/event-bus.service';
import { MessagingModalComponent } from '../messaging-modal/messaging-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Messaging } from 'src/model/messaging';
import { MessagingService } from '../_services/messaging.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;
  eventBusSub?: Subscription;
  modalRef: MdbModalRef<MessagingModalComponent> | null = null;
  allMessages: Messaging[];
  filteredMessages: Messaging [];
  currentUser: any;
  constructor(private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private modalService: MdbModalService,
    private messagingService: MessagingService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.currentUser = this.storageService.getUser();
    this.retriveMessages();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;


      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  openModal() {
    this.modalRef = this.modalService.open(MessagingModalComponent, {
      modalClass: 'modal-xl'
    })
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

  get filteredMessagesRows (): number{
    return this.filteredMessages.length;
  }


}
