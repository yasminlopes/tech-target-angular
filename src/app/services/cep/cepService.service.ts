import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class CepService{
    constructor(private _httpClient: HttpClient){}
    buscarCEP(cep: string){
        return this._httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
    }
}