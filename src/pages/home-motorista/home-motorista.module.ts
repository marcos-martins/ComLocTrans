import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeMotoristaPage } from './home-motorista';

@NgModule({
  declarations: [
    HomeMotoristaPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeMotoristaPage),
  ],
  exports: [
    HomeMotoristaPage
  ]
})
export class HomeMotoristaPageModule {}
