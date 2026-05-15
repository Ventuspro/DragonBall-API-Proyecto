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
    img.src =`${trans.image}`
    img.style.display="block"
    img.style.width="500px"
    img.style.height="500px"
    img.style.margin="auto"




    modal.append(
      id,
      name,
      ki,
      apiKey,
      img,
    )


    overlay.appendChild(modal)

    
    document.body.appendChild(overlay)
    
    overlay.addEventListener('click', () => {
    document.body.style.overflow = 'auto'
    overlay.remove()})
  }

}
