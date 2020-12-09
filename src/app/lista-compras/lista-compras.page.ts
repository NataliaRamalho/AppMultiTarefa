import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {

  itemList: null;
  private listaCompras;
  constructor() {
    this.listaCompras = [];
     
  }

  ngOnInit() {}
  //Função que adiciona os produtos na lista de Compra
  async sendForm(f: NgForm) {
    if(this.itemList != null){
      this.listaCompras.push(this.itemList)
      this.itemList = null;
    }
  }
  
 
}
