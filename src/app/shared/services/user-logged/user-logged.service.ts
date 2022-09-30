import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {

  public user: any = {};

  public get idUsuario(){
    return this.user.user.id;
  }

  public get isCompany(): boolean{
    return this.user.isCompany || false;
  }

  constructor() { }

  disconnect(){
    this.resetUser();
  }

  private resetUser(){
    this.user = {}
  }

}
