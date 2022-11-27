import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../../model/user"

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  public springUrl: string = env.raiddon_client_management_spring_port;
  private token: string;
  private loggedInUserName: string;
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(`${this.springUrl}/user/login`, user, { observe: 'response' }); 
  }

  public register(user: User): Observable<User> {
    return this.http.post<User>(`${this.springUrl}/user/register`, user);
  }

  public logOut(): void {
    this.token = null;
    this.loggedInUserName = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
  }

  public saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  public addUserToLocalCache(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }


  public getUserFromLocalCache(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  public loadToken(): void {
    this.token = localStorage.getItem('token');
  }

  public getToken(): string {
    return this.token;
  }
  public isUserLoggedIn(): boolean {
    this.loadToken();
    if (this.token != null || '') {
      if (this.jwtHelper.decodeToken(this.token).sub != null || '' && !this.jwtHelper.isTokenExpired(this.token)) { // this might need review
        this.loggedInUserName = this.jwtHelper.decodeToken(this.token).sub;
        return true;
      }
    } else {
      this.logOut();
      return false;
    }
  }
}
