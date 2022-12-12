import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GuildRecruitment } from 'src/model/guild';

const baseUrl = 'https://raiddon-spring-server.herokuapp.com/api/guildRecruitments';
const baseUrlAdd = 'https://raiddon-spring-server.herokuapp.com/api/guildRecruitments/add';

@Injectable({
  providedIn: 'root'
})
export class GuildRecruitmentService {

  constructor(private http: HttpClient) { }
  
  id: number

  create(data: any): Observable<any> {
    return this.http.post(baseUrlAdd, data);
  }

  getAll(): Observable<GuildRecruitment[]> {
    return this.http.get<GuildRecruitment[]>(baseUrl);
  }

  get(id: any): Observable<GuildRecruitment> {
    return this.http.get<GuildRecruitment>(`${baseUrl}/${id}`);
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
