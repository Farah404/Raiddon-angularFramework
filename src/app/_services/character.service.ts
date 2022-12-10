import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayableCharacter } from 'src/model/user';


const baseUrl = 'https://raiddon-spring-server.herokuapp.com/api/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }
  id: number

  getAll(): Observable<PlayableCharacter[]> {
    return this.http.get<PlayableCharacter[]>(baseUrl);
  }

  get(id: any): Observable<PlayableCharacter> {
    return this.http.get<PlayableCharacter>(`${baseUrl}/${id}`);
  }
  
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}
