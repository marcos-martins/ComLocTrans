import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroUsuarioRotaPage } from './cadastro-usuario-rota';

@NgModule({
  declarations: [
    CadastroUsuarioRotaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroUsuarioRotaPage),
  ],
  exports: [
    CadastroUsuarioRotaPage
  ]
})
export class CadastroUsuarioRotaPageModule {}
