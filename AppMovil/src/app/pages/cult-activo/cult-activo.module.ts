import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CultActivoPageRoutingModule } from './cult-activo-routing.module';

import { CultActivoPage } from './cult-activo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CultActivoPageRoutingModule
  ],
  declarations: [CultActivoPage]
})
export class CultActivoPageModule {}
