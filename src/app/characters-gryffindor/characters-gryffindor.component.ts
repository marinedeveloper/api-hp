import { Component, OnInit } from '@angular/core';
import { CharactersHouseService } from 'src/services/characters-house.service';
import { Houses } from '../models/houses';

@Component({
  selector: 'app-characters-gryffindor',
  templateUrl: './characters-gryffindor.component.html',
  styleUrls: ['./characters-gryffindor.component.scss']
})
export class CharactersGryffindorComponent implements OnInit {

  characterGryffindor: Array<Houses> = [];

  constructor(private charactersHouseService: CharactersHouseService ) { }



  ngOnInit(): void {
      this.charactersHouseService.getGryffindor().subscribe((characterGryffindor)=> {
      this.characterGryffindor = characterGryffindor;
    });

  }
}
