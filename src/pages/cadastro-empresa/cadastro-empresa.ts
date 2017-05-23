import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresaService } from './../service/empresa.services';

@IonicPage()
@Component({
  selector: 'page-cadastro-empresa',
  templateUrl: 'cadastro-empresa.html',
})
export class CadastroEmpresaPage {

  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private empresaService: EmpresaService) {
  }

  ionViewDidLoad() {
    
  }

  salvar(){
    
  }

}
