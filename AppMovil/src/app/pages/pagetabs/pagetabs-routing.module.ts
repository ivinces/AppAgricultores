import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagetabsPage } from './pagetabs.page';

const routes: Routes = [
  {
    path: '',
    component: PagetabsPage,
    children:
      [
        {
          path: 'tab1',
          children:
            [
              {
                path: '',
                loadChildren: '../perfil/perfil.module#PerfilPageModule'
              }
            ]
        },
        {
          path: 'tab2',
          children:
            [
              {
                path: '',
                loadChildren: '../umbrales/umbrales.module#UmbralesPageModule'
              }
            ]
        },
        {
          path: 'tab3',
          children:
            [
              {
                path: '',
                loadChildren: '../mapa/mapa.module#MapaPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/pagetabs/tab1',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/pagetabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagetabsPageRoutingModule {}
