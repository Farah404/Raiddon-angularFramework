import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Preferences } from 'src/model/user';

const baseUrl = 'https://raiddon-spring-server.herokuapp.com/api/preferences';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(private http: HttpClient) { }
  
  id: number

  getAll(): Observable<Preferences[]> {
    return this.http.get<Preferences[]>(baseUrl);
  }

  get(id: any): Observable<Preferences> {
    return this.http.get<Preferences>(`${baseUrl}/${id}`);
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
