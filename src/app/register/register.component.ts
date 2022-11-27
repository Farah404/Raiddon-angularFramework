import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../api/authentication.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationType } from 'src/model/notification-type.enum';
import { NotificationService } from '../api/notification.service';
import { User } from 'src/model/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy  {
  public showLoading: boolean;
  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService) { }

    ngOnInit(): void {
      if (this.authenticationService.isUserLoggedIn()) {
        this.router.navigateByUrl('/user/management');
      } 
    }

    ngOnDestroy(): void {
      this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public onRegister(user: User): void {
      this.showLoading = true;
      this.subscriptions.push(
        this.authenticationService.register(user).subscribe(
          (response:User) => {
            this.showLoading = false;
            this.sendNotification(NotificationType.SUCCESS, `A new account was created for ${response.firstName}. Please check your email (spam box) for password to log in.`)
          },
          (errorResponse: HttpErrorResponse) => {
            this.sendNotification(NotificationType.ERROR, errorResponse.error.message)
            this.showLoading = false;
          }
        )
      );
    }

    private sendNotification(notificationType: NotificationType, message: string): void {
      if (message) {
        this.notificationService.notify(notificationType, message);
      } else {
        this.notificationService.notify(notificationType, 'An error occured. Please try again.');
      }
    }

}
