import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresaService } from './../service/empresa.service';

@IonicPage()
@Component({
  selector: 'page-cadastro-empresa',
  templateUrl: 'cadastro-empresa.html',
  styleUrls: [
    '//api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.css'
  ]
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
