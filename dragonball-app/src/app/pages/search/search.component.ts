import { Component, inject, OnInit } from '@angular/core';
import { PlanetasService } from '../../service/planetas.service';
import { BuscadorService } from '../../service/buscador.service';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['../generalcss/cssGenerico.css'],
})
export class SearchComponent{




  buscador = inject(BuscadorService)


}
