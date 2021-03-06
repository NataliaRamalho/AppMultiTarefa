import { Injectable } from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class BancoDadosService {
  private produtos: AngularFirestoreCollection;
  constructor(private db: AngularFirestore) {
    this.produtos = this.db.collection("ListaCompras");
  }

  //Função que retorna a lista de compra salva no banco de dados a partir do id do usúario
  async getListaProdutos(idUsuario: string) {
    const res = await this.produtos.doc(idUsuario).get().toPromise();
    return res.data() ? res.data().dados : null;
  }

  //Função que adiciona os novos elementos na lista de compras salva no banco de dados
  addProduct(data: any, idUsuario: string, emailUsuario: string) {
    const dados = {
      id: idUsuario,
      email: emailUsuario,
      dados: data,
    };

    this.produtos
      .doc(idUsuario)
      .set(dados)
      .catch(() => {
        alert("erro ao salvar dados");
      });
  }
}
