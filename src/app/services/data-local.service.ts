import { PeliculaDetalle } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage,
              private toastCtrl: ToastController) {
    this.init();
    this.loadFavorite();
  }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }


  peliculas: PeliculaDetalle[] = [];

  

  saveFilm(pelicula:PeliculaDetalle){

    let existe = false;
    let mensaje = '';

    for ( const peli of this.peliculas){
      if( peli.id === pelicula.id){
        existe = true;
        break;
      }
    }

    if ( existe ){
      this.peliculas = this.peliculas.filter ( peli => peli.id !== pelicula.id);
      mensaje = 'Eliminada de Favoritos'
    } else {
      this.peliculas.push( pelicula);
      mensaje = 'Añadida a Favoritos'
    }
    this.presentToast( mensaje );
    this.storage.set('peliculas', this.peliculas);

    return !existe;

  }

  async loadFavorite() {

    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula( id:number ) {

    await this.loadFavorite();
    const existe = this.peliculas.find( peli => peli.id === id );

    return (existe) ? true : false;
  }
}
