import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Transformacion } from '../interfaces/transformations.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TransformacionesService {

private http = inject(HttpClient)
  transformaciones =signal<Transformacion[]>([])
  loadAllTransformations(){
    this.http.get<Transformacion[]>(`${environment.urlTransformations}`).subscribe(resp =>{
      const transformaciones = resp
      this.transformaciones.set(transformaciones)
    })
  }

  ShowData(trans: Transformacion) {
    document.body.style.overflow = 'hidden'
    let overlay = document.createElement('div')
    let modal = document.createElement('div')

    overlay.className="overlay"
    modal.className="modal"

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

    id.innerText = `ID: ${trans.id}`
    name.innerText = `Nombre: ${trans.name}`
    ki.innerText = `Ki: ${trans.ki}`
    apiKey.innerText = `ApiKey: ${JSON.stringify(this.transformaciones().find(p =>  p.id===trans.id))}`
    img.className="modal-img"
    img.src =`${trans.image}`
    




    modal.append(id,name,ki,apiKey,img,)
    overlay.appendChild(modal)
    document.body.appendChild(overlay)
    overlay.addEventListener('click', () => {
    document.body.style.overflow = 'auto'
    overlay.remove()})
  }

}
