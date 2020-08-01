import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VariabletiempoPage } from './variabletiempo.page';

const routes: Routes = [
  {
    path: '',
    component: VariabletiempoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VariabletiempoPageRoutingModule {}
