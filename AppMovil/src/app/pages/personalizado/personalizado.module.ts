import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizadoPageRoutingModule } from './personalizado-routing.module';

import { PersonalizadoPage } from './personalizado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizadoPageRoutingModule
  ],
  declarations: [PersonalizadoPage]
})
export class PersonalizadoPageModule {}
