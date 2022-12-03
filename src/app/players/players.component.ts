import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  username='';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }
  retrieveUsers(): void {
    this.userService.getAllUsers()
      .subscribe({
        next: (data) => {
          this.users = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  searchUserName(): void {
    this.currentUser = {};
    this.currentIndex = -1;

    this.userService.findByusername(this.username)
      .subscribe({
        next: (data) => {
          this.users = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
