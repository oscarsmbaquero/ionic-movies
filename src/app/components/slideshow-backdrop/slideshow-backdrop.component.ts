import { DetailComponent } from './../detail/detail.component';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() movies: Pelicula[] = [];
  
  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true,
  };

  constructor( private modalController: ModalController) {}

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
