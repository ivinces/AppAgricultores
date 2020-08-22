import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapahumPage } from './mapahum.page';

const routes: Routes = [
  {
    path: '',
    component: MapahumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapahumPageRoutingModule {}
