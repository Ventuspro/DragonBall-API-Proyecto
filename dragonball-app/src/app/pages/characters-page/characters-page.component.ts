import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { PersonajesService } from '../../service/personajes.service';
import { FavouritesService } from '../../service/favourites.service';

@Component({
  templateUrl: './characters-page.component.html',
  styleUrls: ['../generalcss/cssGenerico.css'],
})
export class CharactersPageComponent {

  service = inject(PersonajesService)
  favoritos = inject(FavouritesService)
}
