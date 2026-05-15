import { Routes } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';
import { TransformationsComponent } from './pages/transformations/transformations.component';
import { SearchComponent } from './pages/search/search.component';
import { AffiliationPageComponent } from './pages/affiliation-page/affiliation-page.component';
import { FavouritesComponent } from './pages/favoritos/favourites.component';

export const routes: Routes = [
    {path:'characters', component:CharactersPageComponent},
    {path: 'planets', component:PlanetsPageComponent},
    {path:'transformations', component:TransformationsComponent},
    {path:'affiliation', component:AffiliationPageComponent},
    {path:'search', component:SearchComponent},
    {path:'favourites', component:FavouritesComponent},
    {path:'**', redirectTo:'characters'},
];
