import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RaidRequirement } from 'src/model/raids';

const baseUrl = 'https://raiddon-spring-server.herokuapp.com/api/raidRequirements';
const baseUrlAdd = 'https://raiddon-spring-server.herokuapp.com/api/raidRequirements/add';

@Injectable({
  providedIn: 'root'
})
export class RaidRequirementsService {

  constructor(private http: HttpClient) { }
  
  id: number

  create(data: any): Observable<any> {
    return this.http.post(baseUrlAdd, data);
  }

  getAll(): Observable<RaidRequirement[]> {
    return this.http.get<RaidRequirement[]>(baseUrl);
  }

  get(id: any): Observable<RaidRequirement> {
    return this.http.get<RaidRequirement>(`${baseUrl}/${id}`);
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