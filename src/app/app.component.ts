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
   // private camera: Camera,
    private cambS: CambiotemaService,
    private navCtrl: NavController,
    private sanitizer: DomSanitizer,
    private translate: TranslateService
  ) {
    // al iniciar la aplicacion lo hace con los valores por defecto
    this.initializeApp();
    this.skinmenu = (environment.defaultSkin === 'light' ? false : true);
    this.langmenu = (environment.defaultLanguage === 'es' ? false : true);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.translate.addLangs(environment.currentLanguages);  // añade los idiomas disponibles en nuestra app
      this.translate.setDefaultLang(environment.defaultLanguage);
      this.translate.use(environment.defaultLanguage);
      if (this.translate.getBrowserLang) {  // recoge el idioma del buscador si es posible
        if (environment.currentLanguages.includes(this.translate.getBrowserLang())) {
           this.translate.use(this.translate.getBrowserLang());
        }

      //  Cargamos el estilo por defecto
      this.cambS.setTheme(environment.defaultSkin);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      }
    });
  }
// este metodo cambia el idioma de la aplicacion
  changeLang(e) {
    // console.log(e.detail.checked);
    if (e.detail.checked) {
      this.translate.use('en');
      } else {
      this.translate.use('es');
       }
  }
  // este metodo cambia el tema de la aplicacion
    changeSkin(e) {
      if (e.detail.checked) {
        this.cambS.setTheme('dark');
      } else {
        this.cambS.setTheme('light');
      }
    }
}
