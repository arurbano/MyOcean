import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-help',
  templateUrl: './modal-help.page.html',
  styleUrls: ['./modal-help.page.scss'],
})
export class ModalHelpPage {

  titulo: any;
  subtitulo: any;
  descripcion: any;

  constructor(public modalcontroller: ModalController) {
  }
 // cierra el modal
  dismiss() {
    this.modalcontroller.dismiss();
  }

}
