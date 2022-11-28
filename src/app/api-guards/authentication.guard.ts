import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationType } from 'src/model/notification-type.enum';
import { AuthenticationService } from '../api/authentication.service';
import { NotificationService } from '../api/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService, 
    private router: Router,
    private notificationService: NotificationService
    ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isUserLoggedIn();
  }
  
  private isUserLoggedIn(): boolean {
    if (this.authenticationService.isUserLoggedIn()) {
      return true;
    } else {
    this.router.navigate(['/login']);
    this.notificationService.notify(NotificationType.ERROR, 'You need to log in to access this page.');
    return false;}
  }
}
