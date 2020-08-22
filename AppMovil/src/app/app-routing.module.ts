import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'variabletiempo/:id',
    loadChildren: () => import('./pages/variabletiempo/variabletiempo.module').then( m => m.VariabletiempoPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./pages/reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'umbrales',
    loadChildren: () => import('./pages/umbrales/umbrales.module').then( m => m.UmbralesPageModule)
  },
  {
    path: 'tabbedpage',
    loadChildren: () => import('./pages/tabbedpage/tabbedpage.module').then( m => m.TabbedpagePageModule)
  },
  {
    path: 'mapaprincipal',
    loadChildren: () => import('./pages/mapaprincipal/mapaprincipal.module').then( m => m.MapaprincipalPageModule)
  },
  {
    path: 'maparad',
    loadChildren: () => import('./pages/maparad/maparad.module').then( m => m.MaparadPageModule)
  },
  {
    path: 'mapahum',
    loadChildren: () => import('./pages/mapahum/mapahum.module').then( m => m.MapahumPageModule)
  },
  {
    path: 'mapatab',
    loadChildren: () => import('./pages/mapatab/mapatab.module').then( m => m.MapatabPageModule)
  },
  {
    path: 'personalizado',
    loadChildren: () => import('./pages/personalizado/personalizado.module').then( m => m.PersonalizadoPageModule)
  },
  {
    path: 'mapatemperatura',
    loadChildren: () => import('./pages/mapatemperatura/mapatemperatura.module').then( m => m.MapatemperaturaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
