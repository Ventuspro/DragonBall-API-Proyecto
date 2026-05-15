import { Component, inject, OnInit } from '@angular/core';
import { PlanetasService } from '../../service/planetas.service';
import { planeta } from '../../interfaces/planetas';
import { FavouritesService } from '../../service/favourites.service';
@Component({
  templateUrl: './planets-page.component.html',
  styleUrls: ['../generalcss/cssGenerico.css'],
})
export class PlanetsPageComponent{
  favoritos = inject(FavouritesService)
  service = inject(PlanetasService)
  }
