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

  verificarUsuarioLogado(){
    if(this.afAuth.auth.currentUser !== null) return true;
    return false;
  }

  deslogarUsuario(){
    this.afAuth.auth.signOut();  
  }

  async excluirUsuario(){
    this.user =  this.afAuth.auth.currentUser;
    if(this.user !== null){
      return await this.user.delete().then(()=> alert('Conta excluída com sucesso')).catch(()=> alert('Erro ao excluir conta'));
    }
  }
  
  loginComFaceboock(){
    var provider = new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithPopup(provider)
  }

  

}
