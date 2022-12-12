import { Component, OnInit, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/model/user';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-update-profile-modal',
  templateUrl: './update-profile-modal.component.html',
  styleUrls: ['./update-profile-modal.component.scss']
})
export class UpdateProfileModalComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentUser: User = {
    username: '',
    email: '',
    password: '',
    battleTag:'',
    profilePicture:''
  };
  
  message = '';

  constructor(
    public modalRef: MdbModalRef<UpdateProfileModalComponent>,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    if (!this.viewMode) {
      this.message = '';
      this.getUser(this.route.snapshot.params["id"]);
    }
  }

  getUser(id: string): void {
    this.userService.getUser(id)
      .subscribe({
        next: (data) => {
          this.currentUser = data;
        },
        error: (e) => console.error(e)
      });
  }

  updateUser(): void {
    this.message = '';

    this.userService.updateUser(this.currentUser.id, this.currentUser)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.modalRef.close()
          this.message = res.message ? res.message : 'Your details were updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }


}
