import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Raid } from 'src/model/raids';

const baseUrl = 'https://raiddon-spring-server.herokuapp.com/api/raids';
const baseUrlAdd = 'https://raiddon-spring-server.herokuapp.com/api/raids/add';

@Injectable({
  providedIn: 'root'
})
export class RaidsService {

  constructor(private http: HttpClient) { }
  id: number
  getAll(): Observable<Raid[]> {
    return this.http.get<Raid[]>(baseUrl);
  }

  get(id: any): Observable<Raid> {
    return this.http.get<Raid>(`${baseUrl}/${id}`);
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

  findByRaidName(raidName: any): Observable<Raid[]> {
    return this.http.get<Raid[]>(`${baseUrl}?raidName=${raidName}`);
  }




}
