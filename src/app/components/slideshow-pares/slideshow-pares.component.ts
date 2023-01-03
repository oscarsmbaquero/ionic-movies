import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';


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

  
  constructor() { }

  ngOnInit() {
  }
    onClick() {
      this.cargarMas.emit();
      
    }

  

}
