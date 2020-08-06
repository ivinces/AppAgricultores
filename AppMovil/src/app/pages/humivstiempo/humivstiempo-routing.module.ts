import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HumivstiempoPage } from './humivstiempo.page';

const routes: Routes = [
  {
    path: '',
    component: HumivstiempoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HumivstiempoPageRoutingModule {}
