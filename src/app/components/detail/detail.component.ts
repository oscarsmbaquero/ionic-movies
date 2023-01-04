import { MoviesService } from './../../services/movies.service';
import { Component, Input, OnInit } from '@angular/core';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() id:any;
  movie: PeliculaDetalle = {};

  constructor( private moviesService:MoviesService) { }

  ngOnInit() {

    this.moviesService.getMoviedetail( this.id )
    .subscribe( resp => {
      console.log( resp );
      this.movie = resp;
    });
    this.moviesService.getArtistMovie( this.id )
    .subscribe( resp => {
      console.log( resp );
      this.movie = resp;
    });
  }
  

}
