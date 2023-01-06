import { PeliculaDetalle } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }


  peliculas: PeliculaDetalle[] = [];

  

  saveFilm(pelicula:PeliculaDetalle){

    this.peliculas.push(pelicula );
    
    this.storage.set('peliculas', this.peliculas);

  }
}
