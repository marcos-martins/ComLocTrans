import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroTransportePage } from './cadastro-transporte';

@NgModule({
  declarations: [
    CadastroTransportePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroTransportePage),
  ],
  exports: [
    CadastroTransportePage
  ],
  providers: [
    
  ]
})
export class CadastroTransportePageModule {}
