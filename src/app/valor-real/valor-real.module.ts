import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorRealPageRoutingModule } from './valor-real-routing.module';

import { ValorRealPage } from './valor-real.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorRealPageRoutingModule
  ],
  declarations: [ValorRealPage]
})
export class ValorRealPageModule {}
