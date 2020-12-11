import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from '../services/servicesAuth/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public email : string;
  public senha : string;
  public mensagemErro: string;

  constructor(private auth: AuthService, private router: Router) { 
    this.email = '';
    this.senha = '';
  }

  ngOnInit() {
  }

  validarFormulario(){
    if(this.email == '' || this.senha == ''){
      this.mensagemErro = 'Voce deve preencher todos os campos'
      return false;
    }
    
    return true;
  }
  cadastrar(f: NgForm) {
    this.mensagemErro ='';
    if(this.validarFormulario()){
      if(f.valid){
        this.auth.cadastrarUsuarioEmail(this.email, this.senha)
        .then(() => this.router.navigate(['/valor-real']))
        .catch(()=> this.mensagemErro = 'Erro ao cadastrar, verifique os dados')
      }
    }
  }

  logar(f:NgForm){
    this.mensagemErro ='';
    if(this.validarFormulario()){
      if(f.valid){
        this.auth.logarUsuarioEmail(this.email, this.senha)
        .then(() => this.router.navigate(['/valor-real']))
        .catch((erro)=> this.mensagemErro='Usuario ou senha incorreta' )
      }
    }
  }

}
