import { DataLocalService } from './../services/data-local.service';
import { Component } from '@angular/core';
import { PeliculaDetalle, Genre } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];

  constructor(private dataLocal: DataLocalService) {}

   async ngOnInit() {

    this.peliculas = await this.dataLocal.loadFavorite()
  }

}
