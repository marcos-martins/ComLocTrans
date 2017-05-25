import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeUsuarioPage } from './home-usuario';

@NgModule({
  declarations: [
    HomeUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeUsuarioPage),
  ],
  exports: [
    HomeUsuarioPage
  ]
})
export class HomeUsuarioPageModule {}
