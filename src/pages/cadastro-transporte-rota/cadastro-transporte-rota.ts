import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import {GoogleMaps,GoogleMap,GoogleMapsEvent,LatLng,CameraPosition,MarkerOptions,Marker} from '@ionic-native/google-maps';

import { AutoCompleteEnderecoPage } from './../auto-complete-endereco/auto-complete-endereco';

@Component({
  selector: 'page-cadastro-transporte-rota',
  templateUrl: 'cadastro-transporte-rota.html',
})
export class CadastroTransporteRotaPage {

  address;

  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private modalCtrl: ModalController,
              private googleMaps: GoogleMaps) {

                this.address = {
                  place: ''
                };
  }

  ionViewDidLoad() {
    this.loadMap();
   
  }

  loadMap() {

    //AIzaSyD5f9L-XQUS8YoErHDJatefnbH7MYWkf3A
    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);

    map.one(GoogleMapsEvent.MAP_READY).then(
            () => {
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
          );
  }

  salvar(){
    this.navCtrl.pop();
  }

  procurar(){
    console.log('teste');
    let modal = this.modalCtrl.create(AutoCompleteEnderecoPage);
    let me = this;
      modal.onDidDismiss(data => {
        this.address.place = data;
      });
      modal.present();
      }
        
}
