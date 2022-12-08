import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from 'src/model/equipment';

const baseUrl = 'http://localhost:8080/api/equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }
  
  id: number

  getAll(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(baseUrl);
  }

  get(id: any): Observable<Equipment> {
    return this.http.get<Equipment>(`${baseUrl}/${id}`);
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
