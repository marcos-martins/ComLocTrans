import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CadastroEmpresaPage } from './../pages/cadastro-empresa/cadastro-empresa';
import { CadastroUsuarioPage } from './../pages/cadastro-usuario/cadastro-usuario';
import { CadastroTransportePage } from './../pages/cadastro-transporte/cadastro-transporte';
import { EmpresaService } from './../pages/service/empresa.services';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';

@NgModule({
  declarations: [
    CadastroEmpresaPage,
    CadastroUsuarioPage,
    CadastroTransportePage,
    LoginPage,
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CadastroEmpresaPage,
    CadastroUsuarioPage,
    CadastroTransportePage,
    LoginPage,
    MyApp,
    HomePage
  ],
  providers: [
    EmpresaService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
