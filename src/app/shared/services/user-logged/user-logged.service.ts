import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {

  public user: any = {};

  public get idUsuario(){
    return this.user.id_usuario;
  }

  public get isAdmin(): boolean{
    return this.user.administrator == 1;
  }

  constructor() { }

  disconnect(){
    this.resetUser();
  }

  private resetUser(){
    this.user = {}
  }

}
