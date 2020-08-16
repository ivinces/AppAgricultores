import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UmbralesPageRoutingModule } from './umbrales-routing.module';

import { UmbralesPage } from './umbrales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UmbralesPageRoutingModule
  ],
  declarations: [UmbralesPage]
})
export class UmbralesPageModule {}
