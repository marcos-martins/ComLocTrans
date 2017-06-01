import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaTransportePage } from './lista-transporte';

@NgModule({
  declarations: [
    ListaTransportePage,
  ],
  imports: [
    IonicPageModule.forChild(ListaTransportePage),
  ],
  exports: [
    ListaTransportePage
  ]
})
export class ListaTransportePageModule {}
