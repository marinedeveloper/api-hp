import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from 'src/app/models/characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersServicesService {

  static urlCharacters ='http://hp-api.herokuapp.com/api/characters'

  constructor( private httpClient: HttpClient) { }

  getCharacters(): Observable<Array<Characters>>{
    return this.httpClient.get<Array<Characters>>(CharactersServicesService.urlCharacters);
  }
}
