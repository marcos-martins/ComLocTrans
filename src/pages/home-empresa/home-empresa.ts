import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MenuController } from 'ionic-angular';

import { CadastroRotaPage } from './../cadastro-rota/cadastro-rota';
import { ListaTransportePage } from './../lista-transporte/lista-transporte';


@IonicPage()
@Component({
  selector: 'page-home-empresa',
  templateUrl: 'home-empresa.html',
})
export class HomeEmpresaPage {

  private rootPage: any = ListaTransportePage;
  private cadastroRotaPage: any;
  private listaTransporte: any;


  constructor(private menuCtrl: MenuController,
              private navCtrl: NavController, 
              private navParams: NavParams) {

    this.cadastroRotaPage = CadastroRotaPage;
    this.listaTransporte = ListaTransportePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeEmpresaPage');
   // this.menuCtrl.open();
  }

  openPage(p) {
    //this.navCtrl.push(p);
    this.rootPage = p;
  }

}
