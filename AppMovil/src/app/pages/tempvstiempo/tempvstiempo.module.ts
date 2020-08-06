import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TempvstiempoPageRoutingModule } from './tempvstiempo-routing.module';

import { TempvstiempoPage } from './tempvstiempo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TempvstiempoPageRoutingModule
  ],
  declarations: [TempvstiempoPage]
})
export class TempvstiempoPageModule {}
