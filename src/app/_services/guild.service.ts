import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guild } from 'src/model/guild';

const baseUrl = 'https://raiddon-spring-server.herokuapp.com/api/guilds';
const baseUrlAdd = 'https://raiddon-spring-server.herokuapp.com/api/add';

@Injectable({
  providedIn: 'root'
})
export class GuildService {

  constructor(private http: HttpClient) { }
  id: number
  getAll(): Observable<Guild[]> {
    return this.http.get<Guild[]>(baseUrl);
  }

  get(id: any): Observable<Guild> {
    return this.http.get<Guild>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrlAdd, data);
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

  findByGuildName(guildName: any): Observable<Guild[]> {
    return this.http.get<Guild[]>(`${baseUrl}?guildName=${guildName}`);
  }
}
