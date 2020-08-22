import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapatempPageRoutingModule } from './mapatemp-routing.module';

import { MapatempPage } from './mapatemp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapatempPageRoutingModule
  ],
  declarations: [MapatempPage]
})
export class MapatempPageModule {}
