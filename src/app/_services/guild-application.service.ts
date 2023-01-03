import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GuildApplication } from 'src/model/guildApplication';

const baseUrlAdd = 'https://raiddon-spring-server.herokuapp.com/api/guildApplication/add';
const baseUrl = 'https://raiddon-spring-server.herokuapp.com/api/guildApplication';

@Injectable({
  providedIn: 'root'
})
export class GuildApplicationService {

  constructor(private http: HttpClient) { }
  id: number

  create(data: any): Observable<any> {
    return this.http.post(baseUrlAdd, data);
  }

  get(id: any): Observable<GuildApplication> {
    return this.http.get<GuildApplication>(`${baseUrl}/${id}`);
  }

  getAll(): Observable<GuildApplication[]> {
    return this.http.get<GuildApplication[]>(baseUrl);
  }

}
