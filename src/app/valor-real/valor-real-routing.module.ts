import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorRealPage } from './valor-real.page';

const routes: Routes = [
  {
    path: '',
    component: ValorRealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorRealPageRoutingModule {}
