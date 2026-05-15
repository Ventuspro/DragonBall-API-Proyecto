import { inject, Injectable, signal } from '@angular/core';
import { PersonajesService } from './personajes.service';
import { PlanetasService } from './planetas.service';
import { TransformacionesService } from './transformaciones.service';
import { personaje } from '../interfaces/personajes';
import { planeta } from '../interfaces/planetas';
import { Transformacion } from '../interfaces/transformations.interface';


@Injectable({
  providedIn: 'root'
})
export class BuscadorService {


  searchInfo=''



  characters = inject(PersonajesService)
  planets = inject(PlanetasService)
  transformations = inject(TransformacionesService)
  resultadoPersonajes = signal<personaje[]>([])
  resultadoPlanetas = signal<planeta[]>([])
  resultadoTransformaciones = signal<Transformacion[]>([])

  personajes = this.characters.characters
  planetas = this.planets.planetas
  transformaciones = this.transformations.transformaciones


  Search(busqueda: string){
    this.searchInfo = busqueda.toUpperCase()
    if (!busqueda) {
      this.resultadoPersonajes.set([])
      this.resultadoPlanetas.set([])
      this.resultadoTransformaciones.set([])
    }
    else if (busqueda[0] != ':' && busqueda[0] !='@') {
      this.resultadoPersonajes.set(this.personajes().filter(p => p.name.toLowerCase().includes(busqueda)))
      this.resultadoPlanetas.set(this.planetas().filter(p => p.name.toLowerCase().includes(busqueda)))
      this.resultadoTransformaciones.set(this.transformaciones().filter(t => t.name.toLocaleLowerCase().includes(busqueda)))
    }
    else if(busqueda[0] === ':'){

      const affiliation = busqueda.slice(1)
      if (affiliation.includes('@')) {
        const partes = affiliation.split('@')
        const primeraParte = partes[0].toLowerCase()
        const segundaParte = partes[1].toLowerCase()
        this.resultadoPersonajes.set(this.personajes().filter(p =>p.affiliation.toLowerCase().includes(primeraParte) && p.race.toLowerCase().includes(segundaParte)))
      }

      else if(affiliation.includes('?')){
        const partes = affiliation.split('?')
        const primeraParte = partes[0].toLowerCase()
        const segundaParte = partes[1].toLowerCase()
        this.resultadoPersonajes.set(this.personajes().filter(p =>p.affiliation.toLowerCase().includes(primeraParte) && p.name.toLowerCase().includes(segundaParte)))
      }
      else {

        this.resultadoPersonajes.set(this.personajes().filter(p => p.affiliation.toLowerCase().includes(affiliation)))

      }
    }
    else{
      const raza = busqueda.slice(1)
      this.resultadoPersonajes.set(this.personajes().filter(p => p.race.toLowerCase().includes(raza)))

    }
  }





  ShowData(dato: planeta | personaje | Transformacion) {

    if ('maxKi' in dato) {
      this.characters.ShowData(dato)
    }
    else if ('isDestroyed' in dato) {
      this.planets.ShowData(dato)
    }
    else {
      this.transformations.ShowData(dato)
    }

  }

}
