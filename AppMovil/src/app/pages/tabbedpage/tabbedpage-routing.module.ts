import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabbedpagePage } from './tabbedpage.page';

const routes: Routes = [
  {
    path: '',
    component: TabbedpagePage,
    children: [
      {
        path: 'perfil',
        loadChildren: '../perfil/perfil.module#PerfilPageModule'
    
      },
      {
        path: 'umbrales',
        loadChildren: '../umbrales/umbrales.module#UmbralesPageModule'
    
      },
      {
        path: 'map',
        loadChildren: '../mapa/mapa.module#MapaPageModule'
    
      },
      {
        path: '',
        redirectTo: '/tabbedpage/maps',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabbedpagePageRoutingModule {}
