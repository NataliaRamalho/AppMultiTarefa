import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/servicesAuth/auth.service";



@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.page.html",
  styleUrls: ["./cadastro.page.scss"],
})
export class CadastroPage implements OnInit {
  public email: string;
  public senha: string;
  public mensagemErro: string;

  constructor(private auth: AuthService, private router: Router) {
    this.email = "";
    this.senha = "";
  }

  ngOnInit() {}

  limparCampos(){
    this.email = "";
    this.senha = "";
    this.mensagemErro = "";
  }

  validarFormulario() {
    if (this.email == "" || this.senha == "") {
      this.mensagemErro = "Voce deve preencher todos os campos";
      return false;
    }
    return true;
  }
  
  cadastrar() {
    this.mensagemErro = "";
    if (this.validarFormulario()) {
      this.auth
        .cadastrarUsuarioEmail(this.email, this.senha)
        .then(() => {
          alert("Login realizado com sucesso");
          this.router.navigate(["/lista-compras"]);
          this.limparCampos();
        })
        .catch(
          () => (this.mensagemErro = "Erro ao cadastrar, verifique os dados e se voce ja não possui conta")
        );
        
    }
  }

  logar() {
    this.mensagemErro = "";
    if (this.validarFormulario()) {
      this.auth
        .logarUsuarioEmail(this.email, this.senha)
        .then(() => {
          alert("Login realizado com sucesso");
          this.router.navigate(["/lista-compras"]);          
        })
        .catch(() => (this.mensagemErro = "Usuario ou senha incorreta"));
        
    }
  }

  logarComFacebook() {
    this.auth
      .loginComFaceboock()
      .then(() => {
        alert("Login realizado com sucesso");
        this.router.navigate(["/lista-compras"]);
        this.limparCampos();
      })
      .catch(() => {
        alert("Erro ao conectar com o facebook");
      });
      
  }
}
