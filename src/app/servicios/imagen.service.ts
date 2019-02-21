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

  /**
   * Recibe la imagen img desde tab2 y la guarda en imagen
   * @param img Es la imagen recogida de tab2
   */

  setImagen(img) {
    this.imagen = img;
  }

 /**
  *  Devuelve la imagen guardada en el servicio para poder usarla en el modal
  * @returns imagen Es la imagen del servicio que ha sido recogida por setImagen
  */

  getImagen() {
    return this.imagen;
  }

  /**
   * Recoge el valor de modified y lo guarda en modificado
   * @param modified Nos sirve para saber si se ha realizado un borrado en el modal
   */
  setModificado(modified) {
    this.modificado = modified;
    console.log('setModificado' + this.modificado);
  }

/**
 * Devuelve el valor de modificado recogido del servicio
 * @returns modificado Es el valor que se ha recogido del modal para saber si se ha borrado en el modal
 */
  getModificado() {
    console.log('getModificado' + this.modificado);
    return this.modificado;
  }

}
