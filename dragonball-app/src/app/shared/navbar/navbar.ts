import { Component, inject } from '@angular/core';
import { Router, RouterEvent, RouterLink, RouterLinkActive } from "@angular/router";
import { BuscadorService } from '../../service/buscador.service';
import { TransformacionesService } from '../../service/transformaciones.service';
import { PlanetasService } from '../../service/planetas.service';
import { PersonajesService } from '../../service/personajes.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl:'./navbar.css'
})
export class Navbar {
  navegador = inject(Router)
  planetService = inject(PlanetasService)
  transService = inject(TransformacionesService)
  CharacterService = inject(PersonajesService)

  ngOnInit() {
      this.transService.loadAllTransformations()
      this.planetService.loadAllPlanets();
      this.CharacterService.loadAllCharacters()
      console.log("Todo clean")
    }
  
  buscador = inject(BuscadorService)

  Navegador(){
    this.navegador.navigate(['/search'])
  }

}
