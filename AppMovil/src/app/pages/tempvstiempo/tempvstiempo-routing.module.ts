import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TempvstiempoPage } from './tempvstiempo.page';

const routes: Routes = [
  {
    path: '',
    component: TempvstiempoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempvstiempoPageRoutingModule {}
