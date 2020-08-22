import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapahumPageRoutingModule } from './mapahum-routing.module';

import { MapahumPage } from './mapahum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapahumPageRoutingModule
  ],
  declarations: [MapahumPage]
})
export class MapahumPageModule {}
