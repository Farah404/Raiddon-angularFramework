import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RaidApplication } from 'src/model/raidApplication copy';

const baseUrlAdd = 'https://raiddon-spring-server.herokuapp.com/api/raidApplication/add';
const baseUrl = 'https://raiddon-spring-server.herokuapp.com/api/raidApplication';

@Injectable({
  providedIn: 'root'
})
export class RaidApplicationService {

  constructor(private http: HttpClient) { }
  id: number

  create(data: any): Observable<any> {
    return this.http.post(baseUrlAdd, data);
  }

  get(id: any): Observable<RaidApplication> {
    return this.http.get<RaidApplication>(`${baseUrl}/${id}`);
  }

  getAll(): Observable<RaidApplication[]> {
    return this.http.get<RaidApplication[]>(baseUrl);
  }

}