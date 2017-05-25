import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomeEmpresaPage } from './../home-empresa/home-empresa';
import { HomeMotoristaPage } from './../home-motorista/home-motorista';
import { HomeUsuarioPage } from './../home-usuario/home-usuario';

import { AutenticarService } from './../service/autenticar.service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: string = 'empresa';
  senha: string ='empresa';

  constructor(private autenticarService: AutenticarService,
              private navCtrl: NavController, 
              private navParams: NavParams) {
  }

  ionViewDidLoad() {
   
  }

  autenticar(){

    const usuario = this.autenticarService.autenticar(this.login, this.senha);
    
    switch(usuario.tipo) { 
      case "USUARIO": { 
          this.navCtrl.setRoot(HomeUsuarioPage);
        break; 
        } 
      case "EMPRESA": { 
          this.navCtrl.setRoot(HomeEmpresaPage);
        break; 
        } 
      case "MOTORISTA": {
          this.navCtrl.setRoot(HomeMotoristaPage);
          break;    
        }  
      default: { 
          console.log("Login incorreto" + usuario.tipo); 
        break;              
        } 
    }
  }

}
