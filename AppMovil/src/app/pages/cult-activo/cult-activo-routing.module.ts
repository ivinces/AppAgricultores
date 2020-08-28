import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CultActivoPage } from './cult-activo.page';

const routes: Routes = [
  {
    path: '',
    component: CultActivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CultActivoPageRoutingModule {}
