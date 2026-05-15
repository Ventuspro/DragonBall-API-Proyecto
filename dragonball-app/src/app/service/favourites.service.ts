import { effect, Injectable, signal } from '@angular/core';
import { personaje } from '../interfaces/personajes';
import { Transformacion } from '../interfaces/transformations.interface';
import { planeta } from '../interfaces/planetas';

const loadPersonajesFromLocalStorage = (): personaje[] => {
  const data = localStorage.getItem('personajesFavoritos') ?? '[]'
  return JSON.parse(data)
}

const loadPlanetasFromLocalStorage = (): planeta[] => {
  const data = localStorage.getItem('planetasFavoritos') ?? '[]'
  return JSON.parse(data)
}

const loadTransFromLocalStorage = (): Transformacion[] => {
  const data = localStorage.getItem('transformacionesFavoritas') ?? '[]'
  return JSON.parse(data)
}

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  listaPersonaje = signal<personaje[]>(
    loadPersonajesFromLocalStorage()
  )

  listaTransformacion = signal<Transformacion[]>(
    loadTransFromLocalStorage()
  )

  listaPlanetas = signal<planeta[]>(
    loadPlanetasFromLocalStorage()
  )

  // AUTO GUARDADO LOCAL STORAGE

  savePersonajes = effect(() => {
    localStorage.setItem(
      'personajesFavoritos',
      JSON.stringify(this.listaPersonaje())
    )
  })

  savePlanetas = effect(() => {
    localStorage.setItem(
      'planetasFavoritos',
      JSON.stringify(this.listaPlanetas())
    )
  })

  saveTransformaciones = effect(() => {
    localStorage.setItem(
      'transformacionesFavoritas',
      JSON.stringify(this.listaTransformacion())
    )
  })




  CancelRightClick(event: MouseEvent) {
    event.preventDefault()
  }

  GuardarEnFavoritos(event: MouseEvent, dato: planeta | personaje | Transformacion) {
    this.CancelRightClick(event)
    if ('maxKi' in dato) {
      if (!this.listaPersonaje().some(p => dato.id == p.id)) {


        this.listaPersonaje.update(lista => [...lista, dato])
        this.savePersonajes
      }
    }

    else if ('isDestroyed' in dato) {
      if (!this.listaPlanetas().some(p => p.id == dato.id)) {
        this.listaPlanetas.update(lista => [...lista, dato])
        this.savePlanetas
      }

    }
    else {
      if (!this.listaTransformacion().some(p => p.id == dato.id)) {
        this.listaTransformacion.update(lista => [...lista, dato])
        this.saveTransformaciones
      }
    }
  }



  BorrarFavorito(event:MouseEvent,dato: planeta | personaje | Transformacion) {
    this.CancelRightClick(event)
    if ('maxKi' in dato) {
        this.listaPersonaje.update(lista => lista.filter(p => p.id !== dato.id))
    }

    else if ('isDestroyed' in dato) {
      this.listaPlanetas.update(lista => lista.filter(p => p.id !== dato.id))

    }
    else {
      this.listaTransformacion.update(lista =>lista.filter(p => p.id !== dato.id))
      }
    }
  }

