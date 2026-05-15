import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { CharactersData  } from '../interfaces/characters.interface';
import { environment } from '../../environments/environment.development';
import { personaje } from '../interfaces/personajes';
import { PersonajeMapper } from '../mapper/mapper.ALL';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private http = inject(HttpClient)
  characters = signal<personaje[]>([])
  loadAllCharacters(): void {
    this.http.get<CharactersData>(`${environment.urlCharacters}`).subscribe(resp => {
      const personajes = PersonajeMapper.CharactersToPersonajes(resp.items)
      this.characters.set(personajes)

    })
  }

ShowData(personaje: personaje) {
    document.body.style.overflow = 'hidden'




    let overlay = document.createElement('div')
    let modal = document.createElement('div')

    overlay.style.position = 'fixed'
    overlay.style.top = '0'
    overlay.style.left = '0'
    overlay.style.width = '100%'
    overlay.style.height = '100%'
    overlay.style.backgroundColor = 'rgba(0,0,0,0.8)'
    overlay.style.display = 'flex'
    overlay.style.justifyContent = 'center'
    overlay.style.alignItems = 'center'
    overlay.style.zIndex = '9999'

    modal.style.backgroundColor = 'white'
    modal.style.padding = '20px'
    modal.style.borderRadius = '10px'
    modal.style.width = '50%'
    let id = document.createElement('p')
    let name = document.createElement('p')
    let ki = document.createElement('p')
    let maxKi = document.createElement('p')
    let race = document.createElement('p')
    let gender = document.createElement('p')
    let description = document.createElement('p')
    let affiliation = document.createElement('p')
    let apiKey = document.createElement('p')
    let img = document.createElement('img')


    id.innerText = `ID: ${personaje.id}`
    name.innerText = `Nombre: ${personaje.name}`
    ki.innerText = `Ki: ${personaje.ki}`
    maxKi.innerText = `Max Ki: ${personaje.maxKi}`
    race.innerText = `Raza: ${personaje.race}`
    gender.innerText = `Género: ${personaje.gender}`
    description.innerText = `Descripción: ${personaje.description}`
    affiliation.innerText = `Afiliación: ${personaje.affiliation}`
    apiKey.innerText = `ApiKey: ${JSON.stringify(this.characters().find((p) =>  personaje.id===p.id))}`
    img.src =`${personaje.image}`
    img.style.display="block"
    img.style.width="400px"
    img.style.height="400px"
    img.style.margin="auto"



    modal.append(
      id,
      name,
      ki,
      maxKi,
      race,
      gender,
      description,
      affiliation,
      apiKey,
      img
    )


    overlay.appendChild(modal)

    
    document.body.appendChild(overlay)
    
    overlay.addEventListener('click', () => {
    document.body.style.overflow = 'auto'
    overlay.remove()})

  }




}
