import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CultInactivoPageRoutingModule } from './cult-inactivo-routing.module';

import { CultInactivoPage } from './cult-inactivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CultInactivoPageRoutingModule
  ],
  declarations: [CultInactivoPage]
})
export class CultInactivoPageModule {}
