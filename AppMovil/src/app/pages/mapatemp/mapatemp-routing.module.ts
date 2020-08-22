import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapatempPage } from './mapatemp.page';

const routes: Routes = [
  {
    path: '',
    component: MapatempPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapatempPageRoutingModule {}
