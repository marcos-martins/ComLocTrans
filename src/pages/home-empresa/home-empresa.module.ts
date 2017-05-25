import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeEmpresaPage } from './home-empresa';

@NgModule({
  declarations: [
    HomeEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeEmpresaPage),
  ],
  exports: [
    HomeEmpresaPage
  ]
})
export class HomeEmpresaPageModule {}
