import { Headers,Http,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Usuario } from './../model/usuario.model';

@Injectable()
export class AutenticarService {

    private apiUrl ="http://localhost:9999";

    constructor(private http: Http) { }

    autenticar(login: string, senha : string): Usuario{

        let usuario: Usuario = new Usuario();

        if(login ==='empresa' && senha ==='empresa'){
            usuario.tipo='EMPRESA';
            usuario.nome ='Empresa';
        }

        if(login ==='usuario' && senha ==='usuario'){
            usuario.tipo='USUARIO';
             usuario.nome ='Usuario';
        }

        if(login ==='motorista' && senha ==='motorista'){
            usuario.tipo='MOTORISTA';
             usuario.nome ='Motorista';
        }
        
        return usuario;
    }

}