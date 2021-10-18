import { Component, OnInit } from '@angular/core';
import { CharactersHouseService } from 'src/services/characters-house.service';
import { Houses } from '../models/houses';

@Component({
  selector: 'app-characters-slytherin',
  templateUrl: './characters-slytherin.component.html',
  styleUrls: ['./characters-slytherin.component.scss']
})
export class CharactersSlytherinComponent implements OnInit {

  characterSlytherin: Array<Houses> = [];

  constructor(private charactersHouseService: CharactersHouseService ) { }



  ngOnInit(): void {
      this.charactersHouseService.getSlytherin().subscribe((CharacterSlytherin)=> {
      this.characterSlytherin = CharacterSlytherin;
    });

  }
}
