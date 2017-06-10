import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutoCompleteEnderecoPage } from './auto-complete-endereco';

@NgModule({
  declarations: [
    AutoCompleteEnderecoPage,
  ],
  imports: [
    IonicPageModule.forChild(AutoCompleteEnderecoPage),
  ],
  exports: [
    AutoCompleteEnderecoPage
  ]
})
export class AutoCompleteEnderecoPageModule {}
