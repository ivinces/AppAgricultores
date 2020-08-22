import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapatabPageRoutingModule } from './mapatab-routing.module';

import { MapatabPage } from './mapatab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapatabPageRoutingModule
  ],
  declarations: [MapatabPage]
})
export class MapatabPageModule {}
