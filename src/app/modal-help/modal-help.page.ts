import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-help',
  templateUrl: './modal-help.page.html',
  styleUrls: ['./modal-help.page.scss'],
})
export class ModalHelpPage {

/**
 * Es el titulo de la ayuda elegida
 */
  titulo: any;

 /**
 * Es el subtitulo de la ayuda elegida
 */
  subtitulo: any;

 /**
 * Es la descripcion de la ayuda elegida
 */
  descripcion: any;

  constructor(public modalcontroller: ModalController) {
  }
 /**
  * Cierra el modal
  */
  dismiss() {
    this.modalcontroller.dismiss();
  }

}
