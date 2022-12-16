import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Messaging } from 'src/model/messaging';

const baseUrlAdd = 'https://raiddon-spring-server.herokuapp.com/api/messaging/add';
const baseUrl = 'https://raiddon-spring-server.herokuapp.com/api/messaging';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private http: HttpClient) { }
  id: number

  create(data: any): Observable<any> {
    return this.http.post(baseUrlAdd, data);
  }

  getAll(): Observable<Messaging[]> {
    return this.http.get<Messaging[]>(baseUrl);
  }
}
