import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CultInactivoPage } from './cult-inactivo.page';

const routes: Routes = [
  {
    path: '',
    component: CultInactivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CultInactivoPageRoutingModule {}
