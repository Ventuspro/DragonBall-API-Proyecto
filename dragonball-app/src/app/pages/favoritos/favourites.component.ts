import { Component, inject, OnInit } from '@angular/core';
import { FavouritesService } from '../../service/favourites.service';
import { BuscadorService } from '../../service/buscador.service';

@Component({
  templateUrl: './favourites.component.html',
  styleUrls: ['../generalcss/cssGenerico.css'],
})
export class FavouritesComponent{


  favoritos = inject(FavouritesService)
  buscador = inject(BuscadorService)

}
