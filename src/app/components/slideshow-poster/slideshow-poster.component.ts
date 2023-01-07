import { Component, OnInit, Input } from '@angular/core';
import { Pelicula, PeliculaDetalle } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from './../detail/detail.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies: Pelicula[] = [];
  @Input() films: PeliculaDetalle[] = [];
  
  

  slideOpts = {
    slidesPerView: 3.5,
    freeMode: true,
    spaceBetween:10,
  };
  slideOpts2 = {
    slidesPerView: 3.5,
    freeMode: true,
    spaceBetween:1,
  };

  constructor(private modalController: ModalController) { }

  ngOnInit() {}
  
  

  async showDetail(id: number){
   
    const modal = await this.modalController.create({
      component: DetailComponent,
      componentProps:{
        id
      }
    });
    modal.present();
  }
}
