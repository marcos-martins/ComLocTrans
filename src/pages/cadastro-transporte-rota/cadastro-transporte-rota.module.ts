import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroTransporteRotaPage } from './cadastro-transporte-rota';

@NgModule({
  declarations: [
    CadastroTransporteRotaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroTransporteRotaPage),
  ],
  exports: [
    CadastroTransporteRotaPage
  ]
})
export class CadastroTransporteRotaPageModule {}
