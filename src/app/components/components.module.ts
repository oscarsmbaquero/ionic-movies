import { PipesModule } from './../pipes/pipes.module';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    SlideshowBackdropComponent
  ],
  exports: [
    SlideshowBackdropComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  
})
export class ComponentsModule { }
