import { Motorista } from './../model/motorista.model';
import { Injectable } from '@angular/core';
import { Headers,Http,RequestOptions } from '@angular/http';
import uuidV4 from 'uuid/v4';

import { Transporte } from './../model/transporte.model';
import { Retorno } from './../model/retorno.model';
import { Empresa } from './../model/empresa.model';


@Injectable()
export class EmpresaService {

    private apiUrl ="http://localhost:9999";
    
    private _empresa : Empresa;

    private trans: Transporte[] =[];

    constructor(private http: Http) { 
        let _temp: Transporte = new Transporte();
        _temp.id ="asdasd";
        _temp.descricao ="Transporte feito entra berrini e aplhaville entre as 5:00 e as 17:00";
        _temp.imagemMotorista ="assets/imagens/default-user.png";
        _temp.imagemTransporte ="assets/imagens/default-car.png";
        _temp.qtdUsuarios = 23;
        _temp.nomeMotorista ="Marcos Aurélio da Silva Martins";

         this.trans.push(_temp);  

        _temp = new Transporte();
        _temp.descricao ="Transporte feito entra berrini e aplhaville entre as 5:00 e as 17:00";
        _temp.id ="333das";
        _temp.imagemMotorista ="assets/imagens/default-user.png";
        _temp.imagemTransporte ="assets/imagens/default-car.png";
        _temp.qtdUsuarios = 13;
        _temp.nomeMotorista ="Debora Saldanha";

        this.trans.push(_temp); 

    }

    adicionar(empresa: Empresa) {//: Promise<Retorno> {
        empresa.id = uuidV4();
        const json = JSON.stringify(empresa);
        
        this._empresa = empresa;

        var retorno : Retorno;
        retorno.mensagem = "";
        retorno.sucesso = true;

        return retorno;

        /*return  this.http.post(`${this.apiUrl}/expenses/`,json,this.requestOptions(true))
                        .toPromise()
                        .then(response=> response.json());*/
    }

    obterTransporte(): Transporte[]{
        
        return  this.trans;
     }

    cadastrarTransporte(transporte: Transporte){
        transporte.id = uuidV4();

        transporte.imagemMotorista ="assets/imagens/default-user.png";
       // transporte.imagemTransporte ="assets/imagens/default-car.png";
        transporte.qtdUsuarios = 0;
        this.trans.push(transporte); 

    }

    obterMotorista(): Motorista[]{
        let motoristas: Motorista[] = [];

        let mot: Motorista = new Motorista();
        mot.id = uuidV4();
        mot.nome = "Marcos Aurélio da Silva";

        motoristas.push(mot);

        mot = new Motorista();
        mot.id = uuidV4();
        mot.nome = "Debore Saldanha";

        motoristas.push(mot);

        mot = new Motorista();
        mot.id = uuidV4();
        mot.nome = "Eliano Martins";

        motoristas.push(mot);

        return motoristas;
     }


    private requestOptions(hasBody = false){
        const headers =  new Headers({
            'Authorization' : 'Bearer ' + 'token'
         });
        if(hasBody){
            headers.set('Content-Type', 'application/json')
        }
        return new RequestOptions({ headers : headers });
  }

}