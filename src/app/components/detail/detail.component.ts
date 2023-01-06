import { Cast } from './../../interfaces/interfaces';
import { MoviesService } from './../../services/movies.service';
import { Component, Input, OnInit } from '@angular/core';
import { PeliculaDetalle } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() id:any;
  movie: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto =150;

  slideOptActores = {
    slidesPerView: 3.1,
    freeMode: true,
    spacebetween: 0
  };

  constructor( private moviesService:MoviesService,
               private modalCtrl: ModalController,
    ) { }

  ngOnInit() {

    this.moviesService.getMoviedetail( this.id )
    .subscribe( resp => {
      console.log( resp );
      this.movie = resp;
    });
    this.moviesService.getArtistMovie( this.id )
    .subscribe( resp => {
      console.log( resp );
      this.actores = resp.cast;
    });
  }
  regresar() {
    this.modalCtrl.dismiss();
  }
  favorito() {
    // const existe = this.dataLocal.guardarPelicula( this.pelicula );
    // this.estrella = ( existe ) ? 'star' : 'star-outline';
  }

}
