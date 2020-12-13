import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { AuthService } from "../services/servicesAuth/auth.service";

import { BancoDadosService } from "../services/servicesBancoDados/banco-dados.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-lista-compras",
  templateUrl: "./lista-compras.page.html",
  styleUrls: ["./lista-compras.page.scss"],
})
export class ListaComprasPage implements OnInit {
  public itemList: string;
  public listaCompras: any;
  constructor(
    private auth: AuthService,
    private db: BancoDadosService,
    private alertController: AlertController
  ) {
    this.listaCompras = [];
  }

  ngOnInit() {
    this.recuperarLista();
  }

  async recuperarLista() {
    let novalista = await this.db.getListaProdutos(this.auth.getIdUsuario());
    novalista ? (this.listaCompras = novalista) : "";
  }

  //Função que adiciona os produtos na lista de Compra
  adicionarProdutos(f: NgForm) {
    console.log();

    if (this.itemList != null) {
      this.listaCompras.push(this.itemList);
      this.itemList = null;
    }
  }
  excluirElementoLista(index: number) {
    this.criarAlert(this.listaCompras[index], false)
  }

  excluirLista(){
    this.criarAlert(null, true)
  }

  async criarAlert(item: string, excluirLista: boolean) {
    const alert = await this.alertController.create({
      header: excluirLista ? 'Tem certeza que deseja excluir toda lista' :`Tem certeza que deseja excluir ${item} da lista?`,
      buttons: [
        {
          text: "Não",
          role: "cancel"
        },
        {
          text: "Sim",
          handler: () => {
            excluirLista ? this.listaCompras = [] :  this.listaCompras.splice(this.listaCompras.indexOf(item), 1);
          },
        },
      ],
    });
    await alert.present();
  }
  ngOnDestroy() {
    if (this.listaCompras.length > 0) {
      this.db.addProduct(
        this.listaCompras,
        this.auth.getIdUsuario(),
        this.auth.getEmail()
      );
    }
  }
}
