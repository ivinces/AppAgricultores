import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabbedcultivosPageRoutingModule } from './tabbedcultivos-routing.module';

import { TabbedcultivosPage } from './tabbedcultivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabbedcultivosPageRoutingModule
  ],
  declarations: [TabbedcultivosPage]
})
export class TabbedcultivosPageModule {}
