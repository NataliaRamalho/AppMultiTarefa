import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../services/servicesAuth/auth.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {

  public itemList: null;
  public listaCompras;
  constructor(private auth: AuthService) {
    this.listaCompras = [];
     
  }

  ngOnInit() {}
  
  //Função que adiciona os produtos na lista de Compra
  adicionarProdutos(f: NgForm) {
    if(this.itemList != null){
      this.listaCompras.push(this.itemList)
      this.itemList = null;
    }
  }
  
 
}
