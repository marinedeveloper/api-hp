import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Houses } from 'src/app/models/houses';

@Injectable({
  providedIn: 'root'
})
export class CharactersHouseService {


    static urlCharactersSlytherin ='https://hp-api.herokuapp.com/api/characters/house/slytherin'
    static urlCharactersGryffindor ='https://hp-api.herokuapp.com/api/characters/house/gryffindor'
    static urlCharactersHufflepuff ='http://hp-api.herokuapp.com/api/house/hufflepuff'
    static urlCharactersRavenclaw ='http://hp-api.herokuapp.com/api/house/ravenclaw'

    constructor( private httpClient: HttpClient) { }

    getSlytherin(): Observable<Array<Houses>>{
      return this.httpClient.get<Array<Houses>>(CharactersHouseService.urlCharactersSlytherin);
    }
    getGryffindor(): Observable<Array<Houses>>{
      return this.httpClient.get<Array<Houses>>(CharactersHouseService.urlCharactersGryffindor);
    }
    getHufflepuff(): Observable<Array<Houses>>{
      return this.httpClient.get<Array<Houses>>(CharactersHouseService.urlCharactersHufflepuff);
    }
    getRavenclaw(): Observable<Array<Houses>>{
      return this.httpClient.get<Array<Houses>>(CharactersHouseService.urlCharactersRavenclaw);
    }
}
