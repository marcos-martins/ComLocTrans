import { ListaTransportePage } from './../pages/lista-transporte/lista-transporte';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import {GoogleMaps} from '@ionic-native/google-maps';
import { MyApp } from './app.component';

import { AutoCompleteEnderecoPage } from './../pages/auto-complete-endereco/auto-complete-endereco';
import { HomeEmpresaPage } from './../pages/home-empresa/home-empresa';
import { HomePage } from '../pages/home/home';
import { HomeMotoristaPage } from './../pages/home-motorista/home-motorista';
import { HomeUsuarioPage } from './../pages/home-usuario/home-usuario';
import { CadastroEmpresaPage } from './../pages/cadastro-empresa/cadastro-empresa';

import { CadastroTransportePage } from './../pages/cadastro-transporte/cadastro-transporte';
import { CadastroTransporteRotaPage } from './../pages/cadastro-transporte-rota/cadastro-transporte-rota';
 
import { CadastroUsuarioPage } from './../pages/cadastro-usuario/cadastro-usuario';
import { LoginPage } from './../pages/login/login';

import { AutenticarService } from './../pages/service/autenticar.service';
import { EmpresaService } from './../pages/service/empresa.service';


@NgModule({
  declarations: [
    AutoCompleteEnderecoPage,
    CadastroEmpresaPage,
    CadastroUsuarioPage,
    CadastroTransportePage,
    CadastroTransporteRotaPage,
    LoginPage,
    MyApp,
    HomeEmpresaPage,
    HomeMotoristaPage,
    HomePage,
    HomeUsuarioPage,
    ListaTransportePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AutoCompleteEnderecoPage,
    CadastroEmpresaPage,
    CadastroUsuarioPage,
    CadastroTransportePage,
    CadastroTransporteRotaPage,
    LoginPage,
    MyApp,
    HomeEmpresaPage,
    HomeMotoristaPage,
    HomePage,
    HomeUsuarioPage,
    ListaTransportePage
  ],
  providers: [
    AutenticarService,
    Camera,
    EmpresaService,
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
