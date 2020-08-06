import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadvstiempoPageRoutingModule } from './radvstiempo-routing.module';

import { RadvstiempoPage } from './radvstiempo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadvstiempoPageRoutingModule
  ],
  declarations: [RadvstiempoPage]
})
export class RadvstiempoPageModule {}
