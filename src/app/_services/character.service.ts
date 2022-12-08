import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Charac } from 'src/model/character';


const baseUrl = 'http://localhost:8080/api/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }
  id: number

  getAll(): Observable<Charac[]> {
    return this.http.get<Charac[]>(baseUrl);
  }

  get(id: any): Observable<Charac> {
    return this.http.get<Charac>(`${baseUrl}/${id}`);
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
