import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapatabPage } from './mapatab.page';

const routes: Routes = [
  {
    path: '',
    component: MapatabPage,
    children: [
      {
        path: 'principal',
        loadChildren: () => import('../mapaprincipal/mapaprincipal.module').then( m => m.MapaprincipalPageModule)
    
      },
      {
        path: 'temp',
        loadChildren: () => import('../mapatemperatura/mapatemperatura.module').then( m => m.MapatemperaturaPageModule)
      },
      {
        path: 'hum',
        loadChildren: () => import('../mapahum/mapahum.module').then( m => m.MapahumPageModule)
    
      },
      {
        path: 'rad',
        loadChildren: () => import('../maparad/maparad.module').then( m => m.MaparadPageModule)
    
      },
      {
        path: '',
        redirectTo: '/mapatab/principal',
        pathMatch: 'full'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapatabPageRoutingModule {}
