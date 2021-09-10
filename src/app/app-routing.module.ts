import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { HousesCharactersComponent } from './houses-characters/houses-characters.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent},
  {path: 'characters/house', component: HousesCharactersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
