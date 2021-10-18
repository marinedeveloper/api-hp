import { Component, OnInit } from '@angular/core';
import { CharactersHouseService } from 'src/services/characters-house.service';
import { Houses } from '../models/houses';

@Component({
  selector: 'app-characters-ravenclaw',
  templateUrl: './characters-ravenclaw.component.html',
  styleUrls: ['./characters-ravenclaw.component.scss']
})
export class CharactersRavenclawComponent implements OnInit {


  characterRavenclaw: Array<Houses> = [];

  constructor(private charactersHouseService: CharactersHouseService ) { }



  ngOnInit(): void {
      this.charactersHouseService.getRavenclaw().subscribe((characterRavenclaw)=> {
      this.characterRavenclaw = characterRavenclaw;
    });

  }

}
