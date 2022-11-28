import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../api/authentication.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    if (httpRequest.url.includes(`${this.authenticationService.springUrl}/user/login`) || httpRequest.url.includes(`${this.authenticationService.springUrl}/user/register`)) {
      return httpHandler.handle(httpRequest);
    }
    this.authenticationService.loadToken();
    const token = this.authenticationService.getToken();
    const httpRequestCloneWithToken = httpRequest.clone({setHeaders: { Authorization: `Bearer ${token}` }});
    return httpHandler.handle(httpRequestCloneWithToken);
  } 
}