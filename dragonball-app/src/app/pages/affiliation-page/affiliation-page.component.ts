import { Component, computed, inject, signal } from '@angular/core'
import { PersonajesService } from '../../service/personajes.service'
import { personaje } from '../../interfaces/personajes'
import { FavouritesService } from '../../service/favourites.service'

@Component({
  templateUrl: './affiliation-page.component.html',
  styleUrls: ['../generalcss/cssGenerico.css'],
})
export class AffiliationPageComponent {

  favoritos = inject(FavouritesService)




  palBoton = signal<'afiliacion' | 'raza'>('raza')
  ordenPor = signal<'afiliacion' | 'raza'>('afiliacion')
  cambiarOrden() {
  this.ordenPor.set(
    this.ordenPor() === 'afiliacion'
      ? 'raza'
      : 'afiliacion'
  )
  if(this.ordenPor()==='afiliacion')
    this.palBoton.set("raza")
  else
    this.palBoton.set("afiliacion")
  
}
  serviceChar = inject(PersonajesService)

  personajes = computed(() => {
  return this.serviceChar.characters().slice().sort((a, b) => {
      if (this.ordenPor() === 'afiliacion') {
        return a.affiliation.localeCompare(b.affiliation)
      } else {
        return a.race.localeCompare(b.race)
      }
    })
})


}