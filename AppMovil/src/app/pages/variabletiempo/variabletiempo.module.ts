import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VariabletiempoPageRoutingModule } from './variabletiempo-routing.module';

import { VariabletiempoPage } from './variabletiempo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VariabletiempoPageRoutingModule
  ],
  declarations: [VariabletiempoPage]
})
export class VariabletiempoPageModule {}
