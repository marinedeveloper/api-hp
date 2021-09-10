import { Component, OnInit } from '@angular/core';
import { CharactersServicesService } from 'src/services/characters-services.service';
import { Characters } from '../models/characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Array<Characters> = [];

  constructor(private characterServices: CharactersServicesService ) { }

  

  ngOnInit(): void {
      this.characterServices.getCharacters().subscribe((characters)=> {
      this.characters = characters;
    });

  }

}
