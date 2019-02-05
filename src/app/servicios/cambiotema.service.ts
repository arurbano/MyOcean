import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';

interface Theme {
  name: string;
  styles: ThemeStyle[];
}

interface ThemeStyle {
  themeVariable: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class CambiotemaService {

  private themes: Theme[] = [];
  // tslint:disable-next-line:no-inferrable-types
  private currentTheme: number = 0;

  constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document) {

    this.themes = [
      {
        name: 'light', // estos son los colores que se usaran al seleccionar el tema claro
        styles: [
          { themeVariable: '--ion-color-primary', value: '#669dff' },
          { themeVariable: '--ion-color-primary-rgb', value: '102, 157, 255' },
          { themeVariable: '--ion-color-primary-contrast', value: '#ffffff' },
          { themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255' },
          { themeVariable: '--ion-color-primary-shade', value: '#1e2023' },
          { themeVariable: '--ion-color-primary-tint', value: '#4c8dff' },
          { themeVariable: '--color', value: '#283044' },
          { themeVariable: '--color-selected', value: '#000000' },
          { themeVariable: '--ion-item-color', value: '#283044' },
          { themeVariable: '--ion-color-text', value: '#ffffff' },
          { themeVariable: '--ion-item-ios-background-color', value: '#669dff' },
          { themeVariable: '--ion-item-md-background-color', value: '#669dff' },
          { themeVariable: '--ion-tabbar-background-color', value: '#222428' },
          { themeVariable: '--ion-tabbar-ios-text-color-active', value: '#283044' },
          { themeVariable: '--ion-tabbar-md-text-color-active', value: '#283044' },
          { themeVariable: '--ion-background-color', value: '#ffffff' },
          { themeVariable: '--ion-background', value: '#ffffff' },
          { themeVariable: '--ion-color-secondary', value: '#283044' },
          { themeVariable: '--ion-toggle-handle-background-color', value: '#0b89a7' },
          { themeVariable: '--ion-color-success', value: '#10dc60' }
        ]
      },
      {
        name: 'dark', // estos son los colores que se usaran al seleccionar el tema oscuro
        styles: [
          { themeVariable: '--ion-color-primary', value: '#283044' },
          { themeVariable: '--ion-color-primary-rgb', value: '40, 48, 68' },
          { themeVariable: '--color', value: '#ffffff' },
          { themeVariable: '--ion-color-primary-contrast', value: '#ffffff' },
          { themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255' },
          { themeVariable: '--ion-color-primary-shade', value: '#1e2023' },
          { themeVariable: '--ion-color-primary-tint', value: '#383a3e' },
          { themeVariable: '--ion-item-color', value: '#ffffff' },
          { themeVariable: '--ion-color-text', value: '#ffffff' },
          { themeVariable: '--color', value: '#ffffff' },
          { themeVariable: '--ion-item-ios-background-color', value: '#35383f' },
          { themeVariable: '--ion-item-md-background-color', value: '#35383f' },
          { themeVariable: '--ion-tabbar-background-color', value: '#35383f' },
          { themeVariable: '--ion-tabbar-ios-text-color-active', value: '#ffffff' },
          { themeVariable: '--ion-tabbar-md-text-color-active', value: '#ffffff' },
          { themeVariable: '--ion-background-color', value: '#35383f' },
          { themeVariable: '--ion-color-secondary', value: '#ffffff' },
          { themeVariable: '--ion-toggle-handle-background-color', value: '#ffffff' },
          { themeVariable: '--ion-color-success', value: '#004d00' }
        ]
      }
    ];

  }

  // cambia de un tema al otro
  cycleTheme(): void {

    if (this.themes.length > this.currentTheme + 1) {
      this.currentTheme++;
    } else {
      this.currentTheme = 0;
    }

    this.setTheme(this.themes[this.currentTheme].name);

  }

  // pone el tema a uno determinado
  setTheme(name): void {

    // tslint:disable-next-line:no-shadowed-variable
    const theme = this.themes.find(theme => theme.name === name);

    this.domCtrl.write(() => {

      theme.styles.forEach(style => {
        document.documentElement.style.setProperty(style.themeVariable, style.value);
      });

    });

  }
}
