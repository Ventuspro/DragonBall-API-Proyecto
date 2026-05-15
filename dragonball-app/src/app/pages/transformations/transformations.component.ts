import { Component, inject, OnInit } from '@angular/core';
import { TransformacionesService } from '../../service/transformaciones.service';
import { Transformacion } from '../../interfaces/transformations.interface';
import { FavouritesService } from '../../service/favourites.service';

@Component({
  templateUrl: './transformations.component.html',
  styleUrls: ['../generalcss/cssGenerico.css'],
})
export class TransformationsComponent {

  favoritos = inject(FavouritesService)
  service = inject(TransformacionesService)

  
  

}
