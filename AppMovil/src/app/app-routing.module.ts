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
  },  {
    path: 'tempvstiempo',
    loadChildren: () => import('./pages/tempvstiempo/tempvstiempo.module').then( m => m.TempvstiempoPageModule)
  },
  {
    path: 'radvstiempo',
    loadChildren: () => import('./pages/radvstiempo/radvstiempo.module').then( m => m.RadvstiempoPageModule)
  },
  {
    path: 'humivstiempo',
    loadChildren: () => import('./pages/humivstiempo/humivstiempo.module').then( m => m.HumivstiempoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
