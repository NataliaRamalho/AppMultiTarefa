import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardAuthService } from './services/guard/guard-auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'lista-compras',
    canActivate: [GuardAuthService],
    loadChildren: () => import('./lista-compras/lista-compras.module').then( m => m.ListaComprasPageModule)
  },
  {
    path: 'valor-real',
    canActivate: [GuardAuthService],
    loadChildren: () => import('./valor-real/valor-real.module').then( m => m.ValorRealPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  }

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
