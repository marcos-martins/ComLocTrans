import { Transporte } from './../model/transporte.model';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Motorista } from './../model/motorista.model';
import { EmpresaService } from './../service/empresa.service';

import {GoogleMaps,GoogleMap,GoogleMapsEvent,LatLng,CameraPosition,MarkerOptions,Marker} from '@ionic-native/google-maps';

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
              private empresaService: EmpresaService,
              private googleMaps: GoogleMaps) {

     this.transporte =  new Transporte();

  }

  ionViewDidLoad() {
   this.motoristas = this.empresaService.obterMotorista(); 
  }
  ngAfterViewInit() {
    this.loadMap();
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

  loadMap() {

    //AIzaSyD5f9L-XQUS8YoErHDJatefnbH7MYWkf3A
    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);

    map.one(GoogleMapsEvent.MAP_READY).then(
            () => {
                console.log('Map is ready!');
                // Now you can add elements to the map like the marker
              }
          );

      let ionic: LatLng = new LatLng(43.0741904,-89.3809802);

      // create CameraPosition
      let position: CameraPosition = {
        target: ionic,
        zoom: 18,
        tilt: 30
      };

      // move the map's camera to position
      map.moveCamera(position);
      // create new marker
      let markerOptions: MarkerOptions = {
        position: ionic,
        title: 'Ionic'
      };

      map.addMarker(markerOptions)
        .then((marker: Marker) => {
            marker.showInfoWindow();
          });
  }
}
