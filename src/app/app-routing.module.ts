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
  },
  {
    path: 'clima',
    canActivate: [GuardAuthService],
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
