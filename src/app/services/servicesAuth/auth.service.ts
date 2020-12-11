import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  cadastrarUsuarioEmail(email:string, senha:string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
  }

  logarUsuarioEmail(email:string, senha:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email,senha)
  }

  

}
