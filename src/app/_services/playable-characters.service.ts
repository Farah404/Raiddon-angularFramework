import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Playablecharacter } from 'src/model/playable-character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayableCharactersService {

  public springUrl: string = env.raiddon_client_management_spring_port;


  constructor(private http: HttpClient) { }

  public addPlayableCharacter(formData: FormData): Observable<Playablecharacter> {
    return this.http.post<Playablecharacter>(`${this.springUrl}/playableCharacter/add`, formData);
  }
}
