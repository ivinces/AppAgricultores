import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabbedcultivosPage } from './tabbedcultivos.page';

const routes: Routes = [
  {
    path: '',
    component: TabbedcultivosPage,
    children: [
      {
        path: 'cult-activo',
        loadChildren: () => import('../cult-activo/cult-activo.module').then( m => m.CultActivoPageModule)
    
      },
      {
        path: 'cult-inactivo',
        loadChildren: () => import('../cult-inactivo/cult-inactivo.module').then( m => m.CultInactivoPageModule)
    
      },
      {
        path: '',
        redirectTo: '/tabbedcultivos/cult-activo',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabbedcultivosPageRoutingModule {}
