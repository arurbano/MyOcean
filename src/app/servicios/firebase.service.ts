import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  myCollection: any;
  constructor(private fireStore: AngularFirestore) {
    /* Crea una referencia a la colección 'mispeces' que empleamos para realizar las
   operaciones CRUD*/
    this.myCollection =
      fireStore.collection<any>(environment.firebaseConfig.misPeces);
  }
  /*
  Recibe un objeto y lo guarda como un documento nuevo en la colección 'mispeces'
  Devuelve un Promise
  */
  addPez(datos) {
    return this.myCollection.add(datos);
  }
  /*
  Recupera todos los peces de la colección 'mispeces'
  Devuelve un Observable
  */
  leePeces() {
    return this.myCollection.get();
  }
// Recupera los datos de un pez en especifico dependiendo del id
  leePez(id) {
    return this.myCollection.doc(id).get();
  }
// Elimina un pez de la base de datos a partir de su id
  borraPez(id) {
    return this.myCollection.doc(id).delete();
  }
}
