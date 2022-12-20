import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-guild-management',
  templateUrl: './guild-management.component.html',
  styleUrls: ['./guild-management.component.scss']
})
export class GuildManagementComponent implements OnInit {
  users?: User[];
  filteredUsers?: User[];
  currentUser?: any;
  constructor(
    private storageService: StorageService, 
    private userService : UserService,
  ) { }

  ngOnInit(): void {
    this.retrieveUsers();
    this.currentUser = this.storageService.getUser();
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe({
        next: (data) => {
          this.users = data;
          this.filteredUsers = this.users.filter(f => f.playableCharacter.guild.guildName == this.currentUser.playableCharacter.guild.guildName)
        },
        error: (e) => console.error(e)
      });
  }

}
