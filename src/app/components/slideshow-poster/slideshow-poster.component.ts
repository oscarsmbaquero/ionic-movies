import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 3.5,
    freeMode: true,
    spaceBetween:10,
  };

  constructor() { }

  ngOnInit() {}

}
