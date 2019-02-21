import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { environment } from 'src/environments/environment';
import { CambiotemaService } from './servicios/cambiotema.service';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  langmenu: any;
  skinmenu: any;
  modalOpened: any = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private cambS: CambiotemaService,
    private navCtrl: NavController,
    private sanitizer: DomSanitizer,
    private translate: TranslateService
  ) {

/**
 * Al iniciar la aplicacion lo hace con los valores por defecto recogidos del environment
 */
    this.initializeApp();
    this.skinmenu = (environment.defaultSkin === 'light' ? false : true);
    this.langmenu = (environment.defaultLanguage === 'es' ? false : true);
  }

  /**
   * Añade los idiomas disponibles en nuestra app, recoge el idioma del buscador si es posible y cargamos el estilo por defecto
   */
  initializeApp() {
    this.platform.ready().then(() => {
      this.translate.addLangs(environment.currentLanguages);
      this.translate.setDefaultLang(environment.defaultLanguage);
      this.translate.use(environment.defaultLanguage);
      if (this.translate.getBrowserLang) {
        if (environment.currentLanguages.includes(this.translate.getBrowserLang())) {
           this.translate.use(this.translate.getBrowserLang());
        }
      this.cambS.setTheme(environment.defaultSkin);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      }
    });
  }

/**
 * Este metodo cambia el idioma de la aplicacion
 * @param e Es el evento de pulsar el toggle para cambiar de idioma
 */
  changeLang(e) {
    // console.log(e.detail.checked);
    if (e.detail.checked) {
      this.translate.use('en');
      } else {
      this.translate.use('es');
       }
  }

/**
 * Este metodo cambia el tema de la aplicacion
 * @param e Es el evento de pulsar el toggle para cambiar de tema
 */
    changeSkin(e) {
      if (e.detail.checked) {
        this.cambS.setTheme('dark');
      } else {
        this.cambS.setTheme('light');
      }
    }
}
