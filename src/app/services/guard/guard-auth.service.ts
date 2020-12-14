import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../servicesAuth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthService implements CanActivate {

  constructor(private auth: AuthService) {}

    
  canActivate(){
    if(this.auth.verificarUsuarioLogado()){
      return true;
    }

    alert('Voce deve realizar o login ou cadastro para acessar essa funcionalidade')
    return false;
  }

}
