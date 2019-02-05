import { ImagenService } from './../servicios/imagen.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ModalController, NavParams, IonImg } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { FirebaseService } from './../servicios/firebase.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  @ViewChild('miimagen') miimagen: IonImg;
  id: any;
  nombre: any;
  imagen: any;
  myloading: any;

  constructor(private router: Router,
    public modalcontroller: ModalController,
    public loadingController: LoadingController,
    private firebase: FirebaseService,
    public alertController: AlertController,
    private translate: TranslateService,
    public img: ImagenService,
    public toastController: ToastController,
    private navP: NavParams) {
    this.nombre = this.navP.get('nombre');
    this.id = this.navP.get('id');
    console.log(this.imagen);
  }
// al entrar al modal le pasa la imagen recogida por el servicio y la muestra
  ionViewDidEnter() {
    console.log(this.img.getImagen());
    this.miimagen.src = this.img.getImagen(); // no he hecho lo del load porque al usar *ngIf dejaba de reconocer tu src
  }
  // muestra un cargando
  async presentLoading() {
    this.myloading = await this.loadingController.create({
      message: this.translate.instant('loading')
    });
    return await this.myloading.present();
  }

  // presenta un modal con la confirmacion del borrado
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.translate.instant('toastdel'),
      duration: 2000
    });
    toast.present();
  }

  // muestra una alerta para confirmar el borrado del pez actual
  async presentAlertConfirm(item) {
    const alert = await this.alertController.create({
      header: this.translate.instant('conf'),
      message: this.translate.instant('uremove'),
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: this.translate.instant('yes'),
          handler: () => {
            console.log(item);
            this.firebase.borraPez(item);
            this.presentToast();
            this.dismiss();
            console.log('Confirm Okay');
          }
        }
      ]
    });
    return await alert.present();
  }
  // cierra el modal
  dismiss() {
    this.modalcontroller.dismiss();
  }
}
