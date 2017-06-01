import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Transporte } from './../model/transporte.model';
import { CadastroTransportePage } from './../cadastro-transporte/cadastro-transporte';

import { EmpresaService } from './../service/empresa.service';

@IonicPage()
@Component({
  selector: 'page-lista-transporte',
  templateUrl: 'lista-transporte.html',
})
export class ListaTransportePage {

  transportes: Transporte[];

  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private serviceEmpresa: EmpresaService) {
  
  }

  ionViewDidLoad() {
    
    this.transportes = this.serviceEmpresa.obterTransporte();  
    
  }

  adicionar(){
    this.navCtrl.push(CadastroTransportePage);
  }
  
}
