import { RespuestaMDB } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient) { }


  getCartelera(){

    return this.http.get<RespuestaMDB>('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-09-15&primary_release_date.lte=2023-01-02&api_key=da7e623feff33450d3a2b723948b25aa')
  }
}
