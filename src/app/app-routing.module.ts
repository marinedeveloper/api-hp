import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersGryffindorComponent } from './characters-gryffindor/characters-gryffindor.component';
import { CharactersRavenclawComponent } from './characters-ravenclaw/characters-ravenclaw.component';
import { CharactersSlytherinComponent } from './characters-slytherin/characters-slytherin.component';
import { CharactersComponent } from './characters/characters.component';


const routes: Routes = [
  { path: 'characters', component: CharactersComponent},
  {path: 'house/slytherin', component: CharactersSlytherinComponent},
  {path:'house/gryffindor', component: CharactersGryffindorComponent},
  {path:'house/ravenclaw', component: CharactersRavenclawComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
