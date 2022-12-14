import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';
import { PlayableCharacter} from 'src/model/user';


const baseUrl = 'https://raiddon-spring-server.herokuapp.com/api/users';
const baseUrlCharac = 'https://raiddon-spring-server.herokuapp.com/api/characters';
const baseUrlUpdate = 'https://raiddon-spring-server.herokuapp.com/api/userDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  id: number
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  getUser(id: any): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  updateUserDTO(data: any): Observable<any> {
    return this.http.put(`${baseUrlUpdate}`, data);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByusername(username: any): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}?username=${username}`);
  }
  
  getAllCharacs(): Observable<PlayableCharacter[]> {
    return this.http.get<PlayableCharacter[]>(baseUrlCharac);
  }

  getCharac(id: any): Observable<PlayableCharacter> {
    return this.http.get<PlayableCharacter>(`${baseUrlCharac}/${id}`);
  }

}
