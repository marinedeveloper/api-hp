import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersComponent } from './characters/characters.component';
import { HousesCharactersComponent } from './houses-characters/houses-characters.component';
import {HttpClientModule} from '@angular/common/http';
import { CharactersSlytherinComponent } from './characters-slytherin/characters-slytherin.component';
import { CharactersGryffindorComponent } from './characters-gryffindor/characters-gryffindor.component';
import { CharactersRavenclawComponent } from './characters-ravenclaw/characters-ravenclaw.component';



@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HousesCharactersComponent,
    CharactersSlytherinComponent,
    CharactersGryffindorComponent,
    CharactersRavenclawComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
