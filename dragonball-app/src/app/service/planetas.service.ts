import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { planeta } from '../interfaces/planetas';
import { PlanetaMapper } from '../mapper/mapper.ALL';
import { PlanetsData } from '../interfaces/planets.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  private http = inject(HttpClient)
  planetas = signal<planeta[]>([])
  loadAllPlanets() {
    this.http.get<PlanetsData>(`${environment.urlPlanets}`).subscribe(resp => {
      const planetasLocales = PlanetaMapper.PlanetsToPlanetas(resp.items)
      this.planetas.set(planetasLocales)
    })
  }
  ShowData(planeta: planeta) {
    document.body.style.overflow = 'hidden'
    let overlay = document.createElement('div')
    let modal = document.createElement('div')

    overlay.style.position = 'fixed'
    overlay.style.top = '0'
    overlay.style.left = '0'
    overlay.style.width = '100%'
    overlay.style.height = '100%'
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
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
    let isDestroyed = document.createElement('p')
    let description = document.createElement('p')
    let apiKey = document.createElement('p')
    let img = document.createElement('img')

    id.innerText = `ID: ${planeta.id}`
    name.innerText = `Nombre: ${planeta.name}`
    isDestroyed.innerText = `Esta destruido: ${planeta.isDestroyed}`
    description.innerText = `Descripción: ${planeta.description}`
    apiKey.innerText = `ApiKey: ${JSON.stringify(this.planetas().find(p => p.id === planeta.id))}`
    img.src = `${planeta.image}`
    img.style.display = "block"
    img.style.width = "600px"
    img.style.height = "600px"
    img.style.margin = "auto"




    modal.append(
      id,
      name,
      isDestroyed,
      description,
      apiKey,
      img
    )


    overlay.appendChild(modal)


    document.body.appendChild(overlay)

    overlay.addEventListener('click', () => {
      document.body.style.overflow = 'auto'
      overlay.remove()
    })



  }

}
