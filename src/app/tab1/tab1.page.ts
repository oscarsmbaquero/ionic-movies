import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  moviesRecientes: Pelicula[] = [];
  moviesPopular: Pelicula[] =[];

  constructor( private moviesService:MoviesService) {

  }
  ngOnInit() {
    this.moviesService.getCartelera()
    .subscribe( resp => {
      //console.log('Resp', resp);
      this.moviesRecientes =  resp.results;
    } );
    this.getPopulares();
   
  }

  getPopulares(){   
    this.moviesService.getPopular()
    .subscribe( res => {

      const arrTemp = [...this.moviesPopular,...res.results]
      this.moviesPopular= arrTemp;
    })
  }
  cargarMas() {
   this.getPopulares();
  }

}
