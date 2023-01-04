import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from './../detail/detail.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowPAresComponent implements OnInit {

  @Input() movies: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();
  
  slideOpts = {
    slidesPerView: 3.5,
    freeMode: true,
  };

  
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
    onClick() {
      this.cargarMas.emit();
      
    }
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
