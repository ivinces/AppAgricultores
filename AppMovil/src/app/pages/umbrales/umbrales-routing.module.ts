import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UmbralesPage } from './umbrales.page';

const routes: Routes = [
  {
    path: '',
    component: UmbralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UmbralesPageRoutingModule {}
