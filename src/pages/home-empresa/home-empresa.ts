import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MenuController } from 'ionic-angular';

import { CadastroRotaPage } from './../cadastro-rota/cadastro-rota';
import { CadastroTransportePage } from './../cadastro-transporte/cadastro-transporte';


@IonicPage()
@Component({
  selector: 'page-home-empresa',
  templateUrl: 'home-empresa.html',
})
export class HomeEmpresaPage {

  private rootPage: any;
  private cadastroRotaPage: any;
  private cadastroTransportePage: any;


  constructor(private menuCtrl: MenuController,
              private navCtrl: NavController, 
              private navParams: NavParams) {

    this.cadastroRotaPage = CadastroRotaPage;
    this.cadastroTransportePage = CadastroTransportePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeEmpresaPage');
   // this.menuCtrl.open();
  }

  openPage(p) {
    this.rootPage = p;
  }

}
