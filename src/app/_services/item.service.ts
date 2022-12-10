import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from 'src/model/items';

const baseUrl = 'https://raiddon-spring-server.herokuapp.com/api/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Items[]> {
    return this.http.get<Items[]>(baseUrl);
  }

  findByItemName(itemName: any): Observable<Items[]> {
    return this.http.get<Items[]>(`${baseUrl}?itemName=${itemName}`);
  }

}
