import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResumoTransportePage } from './resumo-transporte';

@NgModule({
  declarations: [
    ResumoTransportePage,
  ],
  imports: [
    IonicPageModule.forChild(ResumoTransportePage),
  ],
  exports: [
    ResumoTransportePage
  ]
})
export class ResumoTransportePageModule {}
