import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaparadPage } from './maparad.page';

const routes: Routes = [
  {
    path: '',
    component: MaparadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaparadPageRoutingModule {}
