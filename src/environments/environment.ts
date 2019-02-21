export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyAe1u8eB3yfo3KIYXWRtPL0e2qp2RlEJDg',
    authDomain: 'myocean-4a035.firebaseapp.com',
    databaseURL: 'https://myocean-4a035.firebaseio.com',
    projectId: 'myocean-4a035',
    storageBucket: 'myocean-4a035.appspot.com',
    messagingSenderId: '36601830182',
    misPeces: 'mispeces'
  },
  pezCollection: 'mispeces',
  currentLanguages: ['es', 'en'], /** Son los dos idiomas disponibles de la aplicación*/
  defaultLanguage: 'es',  /** Es el idioma por defecto de la aplicación*/
  defaultSkin: 'light',  /** Es el tema por defecto de la aplicación*/
  defecto: '../assets/imgs/myocean.png' /** Es la imagen que se muestra por defecto en aplicación
  antes de hacer ninguna foto para crear un pez*/
};

