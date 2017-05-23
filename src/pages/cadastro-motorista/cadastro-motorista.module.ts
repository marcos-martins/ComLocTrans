import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroMotoristaPage } from './cadastro-motorista';

@NgModule({
  declarations: [
    CadastroMotoristaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroMotoristaPage),
  ],
  exports: [
    CadastroMotoristaPage
  ]
})
export class CadastroMotoristaPageModule {}
