import { FirebaseService } from './../servicios/firebase.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AlertController, IonImg, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { IonSlides, IonInfiniteScroll } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagenService } from './../servicios/imagen.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private pez: FormGroup;

  @ViewChild('dynamicList') dynamicList;
  value: any;
  myloading: any;
  modificado: boolean;
  listado = [];
  listadoPanel = [];
  SwipedTabsIndicator: any = null;
  tabs = ['selectTab(0)', 'selectTab(1)'];
  public category: any = '0';
  ntabs = 2;
  imagen = environment.defecto;


  @ViewChild('imagenTaken') elemElem: IonImg;
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: IonSlides;
  @ViewChild('infiniteScroll') ionInfiniteScroll: IonInfiniteScroll;

  constructor(
    private formBuilder: FormBuilder,
    private firebase: FirebaseService,
    private camera: Camera,
    public img: ImagenService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private translate: TranslateService,
    public toastController: ToastController,
    public modalController: ModalController
  ) {
    this.pez = this.formBuilder.group({
      nombre: ['', Validators.required],
      imagen: []
    });
  }
enviarImagen(imagen) {
  this.img.setImagen(imagen);
}

// pasa los datos del inputtext y la imagen convertida a base64, y llama al método que lo guarda en la base de datos
  logForm() {
    if (this.imagen === environment.defecto) {
      this.presentToastImg();
    } else {
    // tslint:disable-next-line:prefer-const
    let data = {
      nombre: this.pez.get('nombre').value,
      imagen: this.elemElem.src
    };
    /* Mostramos el cargando... */
    this.myloading = this.presentLoading();
    this.firebase.addPez(data)
      .then((docRef) => {
        console.log('ID insertado (por si lo necesitamos para algo...): ', docRef.id);
        /* Ponemos en blanco los campos del formulario*/
        this.pez.setValue({
          nombre: '',
          imagen: ''
        });
        this.imagen = environment.defecto;
        this.presentToastSave();
        /* Cerramos el cargando...*/
        this.loadingController.dismiss();
      })
      .catch((error) => {
        console.error('Error insertando documento:', error);
        /* Cerramos el cargando...*/
        this.loadingController.dismiss();
      });
    }
  }
// se ejecuta al entrar en la ventana y carga la categoria, la lista de items y un cargando
  ionViewDidEnter() {
    this.actualizarLista();
  }
  // muestra el cargando que recarga la ventana entera y no nos permite hacer nada mientras.
  async presentLoading() {
    this.myloading = await this.loadingController.create({
      message: this.translate.instant('loading')
    });
    return await this.myloading.present();
  }

  // iguala la lista de items a la lista de objetos en la base de datos
  initializeItems() {
    this.listadoPanel = this.listado;
  }

  actualizarLista() {
    this.modificado = this.img.getModificado();
    console.log(this.modificado);
    this.presentLoading();
    this.category = '0';
    this.SwipedTabsSlider.length().then(l => {
      this.ntabs = l;
    });
    this.firebase.leePeces()
      .subscribe((querySnapshot) => {
        this.listado = [];
        querySnapshot.forEach((doc) => {
          this.listado.push({ id: doc.id, ...doc.data() });
        });
        this.listadoPanel = this.listado;
        this.loadingController.dismiss();
      });
  }

// recoge los items de la lista
  getItems(ev: any) {
    this.initializeItems();
    // tslint:disable-next-line:prefer-const
    let val = ev.target.value;
    if (val && val.trim() !== '') {
      this.listadoPanel = this.listadoPanel.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  // este método es llamado por la searchbar para filtrar la lista de items
  getFilteredItem(ev: any) {
    this.initializeItems();
    // set val to the value of the ev target
    // tslint:disable-next-line:prefer-const
    let val = ev.target.value;

    this.listadoPanel = this.listado.filter((item) => {
      return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });
  }

  // devuelve la lista de items, se usa para que con cada cambio en la searchbar se "refresque" la lista
  cambia(ev: any) {
    return this.listado;
  }

  // refresca la lista de items
  doRefresh(refresher) {
    this.firebase.leePeces()
      .subscribe(querySnapshot => {
        this.listado = [];
        querySnapshot.forEach((doc) => {
          this.listado.push({ id: doc.id, ...doc.data() });
        });
        this.listadoPanel = this.listado;
        refresher.target.complete();
      });
  }

  // muestra una toast con el mensaje de falta de imagen
  async presentToastImg() {
    const toast = await this.toastController.create({
      message: this.translate.instant('toastimg'),
      duration: 2000
    });
    toast.present();
  }

 // muestra un toast con un mensaje de guardado correcto
  async presentToastSave() {
    const toast = await this.toastController.create({
      message: this.translate.instant('toastsave'),
      duration: 2000
    });
    toast.present();
  }

  /* Actualiza la categoría que esté en ese momento activa*/
  updateCat(cat: Promise<any>) {
    cat.then(dat => {
      this.category = dat;
      this.category = +this.category; // to int;
    });
  }

  vueltalista() {
    this.category = '0';
    this.ionViewDidEnter();
  }

  // Abre el modal para ver los datos y le pasa el id, el nombre y la imagen
  async verDatos(id, nombre, imagen) {
    this.enviarImagen(imagen);
    // tslint:disable-next-line:prefer-const
    let modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        id: id,
        nombre: nombre,
        imagen: imagen
      }
    });
    modal.onDidDismiss().then(response => {
      this.modificado = this.img.getModificado();
      console.log('se ha borrado' + this.modificado);
      if ( this.modificado === true) {
        this.actualizarLista();
        this.modificado = false;
        this.img.setModificado(this.modificado);
        this.actualizarLista();
      }
      })
    .catch (
      error => {
      console.log(error);
    });
    return await modal.present();
  }

// abre la camara y nos permite tomar las fotos
  takePic() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,  /*FILE_URI */
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: 0,
      correctOrientation: true,
      /* allowEdit:true,*/
      saveToPhotoAlbum: true,
      /*sourceType:0 es library, 1 camera, 2 saved */
      targetHeight: 100,
      targetWidth: 200
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.imagen = 'data:image/jpeg;base64, ' + imageData;
      });
    }
}
