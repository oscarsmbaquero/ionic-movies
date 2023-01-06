import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { DetailComponent } from '../components/detail/detail.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar='';
  peliculasBuscadas: Pelicula[] = [];
  buscando = false;
  ideas: string[] = ['Dias de Futbol', 'En el nombre del Padre', 'El dia de la Bestía'];


  buscar( event: any ) {
    const valor: string = event.detail.value;

    if ( valor.length === 0 ) {
      this.buscando = false;
      this.peliculasBuscadas = [];
      return;
    }

    // console.log(valor);
    this.buscando = true;

    this.moviesService.searchMovies( valor )
        .subscribe( resp => {
          this.peliculasBuscadas = resp["results"]
           this.buscando = false;
        });
  }
   async detail(id:number){
    const modal = await this.modalController.create({
      component: DetailComponent,
      componentProps:{
        id
      }
    });
    modal.present();
  }

  constructor(private moviesService: MoviesService,
              private modalController: ModalController) {}

}
