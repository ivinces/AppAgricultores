import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaparadPageRoutingModule } from './maparad-routing.module';

import { MaparadPage } from './maparad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaparadPageRoutingModule
  ],
  declarations: [MaparadPage]
})
export class MaparadPageModule {}
