import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomeEmpresaPage } from './../pages/home-empresa/home-empresa';
import { HomePage } from '../pages/home/home';
import { HomeMotoristaPage } from './../pages/home-motorista/home-motorista';
import { HomeUsuarioPage } from './../pages/home-usuario/home-usuario';
import { CadastroEmpresaPage } from './../pages/cadastro-empresa/cadastro-empresa';
import { CadastroRotaPage } from './../pages/cadastro-rota/cadastro-rota';
import { CadastroTransportePage } from './../pages/cadastro-transporte/cadastro-transporte';
import { CadastroUsuarioPage } from './../pages/cadastro-usuario/cadastro-usuario';
import { LoginPage } from './../pages/login/login';

import { AutenticarService } from './../pages/service/autenticar.service';
import { EmpresaService } from './../pages/service/empresa.service';


@NgModule({
  declarations: [
    CadastroEmpresaPage,
    CadastroRotaPage,
    CadastroUsuarioPage,
    CadastroTransportePage,
    LoginPage,
    MyApp,
    HomeEmpresaPage,
    HomeMotoristaPage,
    HomePage,
    HomeUsuarioPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CadastroEmpresaPage,
    CadastroRotaPage,
    CadastroUsuarioPage,
    CadastroTransportePage,
    LoginPage,
    MyApp,
    HomeEmpresaPage,
    HomeMotoristaPage,
    HomePage,
    HomeUsuarioPage
  ],
  providers: [
    AutenticarService,
    EmpresaService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
