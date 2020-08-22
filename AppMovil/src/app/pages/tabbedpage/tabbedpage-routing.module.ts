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
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
    
      },
      {
        path: 'umbrales',
        loadChildren: () => import('../umbrales/umbrales.module').then( m => m.UmbralesPageModule)
    
      },
      {
        path: '',
        redirectTo: '/tabbedpage/perfil',
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
