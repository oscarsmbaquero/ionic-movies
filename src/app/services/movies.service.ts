import { environment } from './../../environments/environment';
import { RespuestaCredits, RespuestaMDB, Genre } from './../interfaces/interfaces';
import { PeliculaDetalle } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularesPage = 0;
  generos: Genre[] = [];

  constructor( private http: HttpClient) { }

  private executeQuery<T>(query: string ){

    query = URL + query;
    query += `&api_key=${ apiKey }&language=es&include_image_language=es`;

    return this.http.get<T>( query );
  }


  getCartelera(){

    const hoy = new Date();
    const ultimoDia = new Date( hoy.getFullYear(), hoy.getMonth() + 1, 0 ).getDate();
    const mes = hoy.getMonth() + 1;

    let mesString;

    if ( mes < 10 ) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }


    const inicio = `${ hoy.getFullYear() }-${ mesString }-01`;
    const fin    = `${ hoy.getFullYear() }-${ mesString }-${ ultimoDia }`;

    return this.executeQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${ inicio }&primary_release_date.lte=${ fin }`);
    
  }

  getPopular(){
    this.popularesPage++;

    const query =`/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;

    return this.executeQuery<RespuestaMDB>(query)
  }

  searchMovies( texto: string ) {
    return this.executeQuery<RespuestaMDB>(`/search/movie?query=${ texto }`);

  }

  getMoviedetail( id: string ) {
    return this.executeQuery<PeliculaDetalle>(`/movie/${ id }?a=1`);
  }
  getArtistMovie( id: string ) {
    return this.executeQuery<RespuestaCredits>(`/movie/${ id }/credits?a=1`);
  }

  cargarGeneros(): Promise<Genre[]> {

    return new Promise( resolve => {

      this.executeQuery<any>(`/genre/movie/list?a=1`)
        .subscribe( resp => {
          //console.log(resp,'resp')
          this.generos = resp['genres'];
          //console.log(this.generos);
          resolve(this.generos);
        });

    });

}
}