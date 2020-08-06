import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HumivstiempoPageRoutingModule } from './humivstiempo-routing.module';

import { HumivstiempoPage } from './humivstiempo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HumivstiempoPageRoutingModule
  ],
  declarations: [HumivstiempoPage]
})
export class HumivstiempoPageModule {}
