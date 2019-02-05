import { Component, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { IonSlides, IonInfiniteScroll } from '@ionic/angular';
import { ModalHelpPage } from '../modal-help/modal-help.page';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private translate: TranslateService,
    public modalController: ModalController
  ) {

  }

// abre el modal donde veremos los datos de la ayuda en cuestion
  async verAyudaFeed(titulo, subtitulo, descripcion) {
    // tslint:disable-next-line:prefer-const
    let modalHelp = await this.modalController.create({
      component: ModalHelpPage,
      componentProps: {
        titulo: this.translate.instant('feed'),
        subtitulo: this.translate.instant('feedtip'),
        descripcion: this.translate.instant('feeddesc'),
      },
    });
    modalHelp.onDidDismiss().then(response => {
    })
      .catch(
        error => {
          console.log(error);
        });
        return await modalHelp.present();
      }

// abre el modal donde veremos los datos de la ayuda en cuestion
    async verAyudaClean(titulo, subtitulo, descripcion) {
      // tslint:disable-next-line:prefer-const
      let modalHelp = await this.modalController.create({
        component: ModalHelpPage,
        componentProps: {
          titulo: this.translate.instant('clean'),
          subtitulo: this.translate.instant('cleantip'),
          descripcion: this.translate.instant('cleandesc')
        }
      });
      modalHelp.onDidDismiss().then(response => {
      })
        .catch(
          error => {
            console.log(error);
          });
          return await modalHelp.present();
        }

// abre el modal donde veremos los datos de la ayuda en cuestion
      async verAyudaCares(titulo, subtitulo, descripcion) {
        // tslint:disable-next-line:prefer-const
        let modalHelp = await this.modalController.create({
          component: ModalHelpPage,
          componentProps: {
            titulo: this.translate.instant('cares'),
            subtitulo: this.translate.instant('carestip'),
            descripcion: this.translate.instant('caresdesc')
          }
        });
        modalHelp.onDidDismiss().then(response => {
        })
          .catch(
            error => {
              console.log(error);
            });
            return await modalHelp.present();
      }
    }
