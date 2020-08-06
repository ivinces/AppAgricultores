import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadvstiempoPage } from './radvstiempo.page';

const routes: Routes = [
  {
    path: '',
    component: RadvstiempoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadvstiempoPageRoutingModule {}
