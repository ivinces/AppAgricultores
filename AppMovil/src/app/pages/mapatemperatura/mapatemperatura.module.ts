import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapatemperaturaPageRoutingModule } from './mapatemperatura-routing.module';

import { MapatemperaturaPage } from './mapatemperatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapatemperaturaPageRoutingModule
  ],
  declarations: [MapatemperaturaPage]
})
export class MapatemperaturaPageModule {}
