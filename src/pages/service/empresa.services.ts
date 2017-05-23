import { Retorno } from './../model/retorno.model';
import { Empresa } from './../model/empresa.model';
import { Injectable } from '@angular/core';
import { Headers,Http,RequestOptions } from '@angular/http';
import uuidV4 from 'uuid/v4';

@Injectable()
export class EmpresaService {

    private apiUrl ="http://localhost:9999";
    
    private _empresa : Empresa;

    constructor(private http: Http) { }

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