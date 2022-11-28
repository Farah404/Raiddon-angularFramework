import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/model/user';
import { environment as env } from 'src/environments/environment';
import { CustomHttpResponse } from 'src/model/http-response';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public springUrl: string = env.raiddon_client_management_spring_port;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.springUrl}/user/list`);
  }

  
  public addUser(formData: FormData): Observable<User> {
    return this.http.post<User>(`${this.springUrl}/user/add`, formData);
  }

  public updateUser(formData: FormData): Observable<User> {
    return this.http.post<User>(`${this.springUrl}/user/update`, formData);
  }

  public resetPassWord(email: string): Observable<CustomHttpResponse> {
    return this.http.get<CustomHttpResponse>(`${this.springUrl}/user/reset-password/${email}`);
  }

  public updateProfileImage(formData: FormData): Observable<HttpEvent<User>> {
    return this.http.post<User>(`${this.springUrl}/user/update-profile-image`, formData, {reportProgress: true, observe: 'events'});
  }

  public deleteUser(userName: string): Observable<CustomHttpResponse> {
    return this.http.delete<CustomHttpResponse>(`${this.springUrl}/user/delete/${userName}`);
  }

  public addUsersToLocalCache(users: User[]): void {
    return localStorage.setItem("users", JSON.stringify(users)); // Not the optimal method
  }

  public getUsersFromLocalCache(): User[] {
    if (localStorage.getItem('users')) {
      return JSON.parse(localStorage.getItem('users'));
    }
    return null;
  }

  public createUserFormData(loggedInUserName: string, user: User, profileImage: File): FormData {
    const formData = new FormData();
    formData.append('currentUserName', loggedInUserName);
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('userName', user.userName);
    formData.append('email', user.email);
    formData.append('profileImage', profileImage);
    formData.append('role', user.role);
    formData.append('isActive', JSON.stringify(user.active));
    formData.append('isNotLocked', JSON.stringify(user.notLocked));
    return formData;
  }

}
