import { Injectable } from '@angular/core';
import { Tab2Page } from '../tab2/tab2.page';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  imagen: any;
  modificado: boolean;

  constructor() {
    this.imagen = null;
  }
 // recoge la imagen de tab2 y la guarda en imagen
  setImagen(img) {
    this.imagen = img;
  }

  // devuelve la imagen para poder usarla en el modal
  getImagen() {
    return this.imagen;
  }

  setModificado(modified) {
    this.modificado = modified;
    console.log('setModificado' + this.modificado);
  }

  getModificado() {
    console.log('getModificado' + this.modificado);
    return this.modificado;
  }

}
