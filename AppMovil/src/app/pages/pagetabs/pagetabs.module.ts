import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagetabsPageRoutingModule } from './pagetabs-routing.module';

import { PagetabsPage } from './pagetabs.page';

import { PerfilPage } from '../perfil/perfil.page';
import { MapaPage } from '../mapa/mapa.page';
import { UmbralesPage } from '../umbrales/umbrales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagetabsPageRoutingModule
  ],
  declarations: [PagetabsPage]
})
export class PagetabsPageModule {
  tab1 = PerfilPage;
  tab2 = UmbralesPage;
  tab3 = MapaPage;
}
