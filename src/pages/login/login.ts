import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroEmpresaPage } from './../cadastro-empresa/cadastro-empresa';
import { CadastroUsuarioPage } from './../cadastro-usuario/cadastro-usuario';
import { CadastroTransportePage } from './../cadastro-transporte/cadastro-transporte';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
   
  }

  login(){
    this.navCtrl.push(CadastroEmpresaPage);
  }

}
