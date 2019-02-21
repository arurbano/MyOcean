import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  myCollection: any;
  constructor(private fireStore: AngularFirestore) {
    /**
     * Crea una referencia a la colección 'mispeces' que empleamos para realizar las operaciones CRUD
     */
    this.myCollection =
      fireStore.collection<any>(environment.firebaseConfig.misPeces);
  }

 /**
  * Recibe un objeto y lo guarda como un documento nuevo en la colección 'mispeces'
  * @param datos Es la informacion del objeto pez que vamos a crear
  * Devuelve un Observable
  */
  addPez(datos) {
    return this.myCollection.add(datos);
  }

  /**
   * Recupera todos los peces de la colección 'mispeces'
   * Devuelve un Observable
   */
  leePeces() {
    return this.myCollection.get();
  }

  /**
   * Recupera los datos de un pez en especifico dependiendo de su id en la colección 'mispeces'
   * @param id Es el id del elemento en firebase que se va a leer
   * Devuelve un Observable
   */

  leePez(id) {
    return this.myCollection.doc(id).get();
  }

   /**
   * Elimina los datos de un pez en especifico dependiendo de su id en la colección 'mispeces'
   * @param id Es el id del elemento en firebase que se va a borrar
   * Devuelve un Observable
   */
  borraPez(id) {
    return this.myCollection.doc(id).delete();
  }
}
