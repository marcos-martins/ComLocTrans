import { CadastroTransporteRotaPage } from './../cadastro-transporte-rota/cadastro-transporte-rota';
import { Transporte } from './../model/transporte.model';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Motorista } from './../model/motorista.model';
import { EmpresaService } from './../service/empresa.service';


@IonicPage()
@Component({
  selector: 'page-cadastro-transporte',
  templateUrl: 'cadastro-transporte.html',
})
export class CadastroTransportePage {

  transporte: Transporte;
  motoristas: Motorista[];
  motoristaSelecionado: any;

  constructor(private camera: Camera,
              private navCtrl: NavController, 
              private navParams: NavParams,
              private empresaService: EmpresaService) {

     this.transporte =  new Transporte();

  }

  ionViewDidLoad() {
   this.motoristas = this.empresaService.obterMotorista(); 
  }
  ngAfterViewInit() {
    
  }

  private openGallery (): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.FILE_URI,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }

    this.camera.getPicture(cameraOptions)
      .then(file_uri => this.transporte.imagemTransporte = file_uri, 
      err => console.log(err));   
    }

    salvar(){
      this.transporte.nomeMotorista = this.motoristaSelecionado;
      this.empresaService.cadastrarTransporte(this.transporte);
      console.log(this.transporte);
      this.navCtrl.pop();
    }

    cadastrarRota(){
      this.navCtrl.push(CadastroTransporteRotaPage);
    }
}
