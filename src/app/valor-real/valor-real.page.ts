import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-valor-real',
  templateUrl: './valor-real.page.html',
  styleUrls: ['./valor-real.page.scss'],
})
export class ValorRealPage implements OnInit {
  public valorEUA: string;
  public valorEuro: string;
  public valorReinoUnido : string;
  public valorSuica: string;

  constructor() { 
    
  }

  ngOnInit() {
    this.buscarValores();
  }

  //função responsavel por buscar os valores das moedas em relação ao real
 buscarValores(){
    
    axios.get("https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,GBP-BRL,CHF-BRL")
        .then(res=>{
          this.valorEUA = res.data.USD.bid;
          this.valorEuro = res.data.EUR.bid;
          this.valorReinoUnido = res.data.GBP.bid;
          this.valorSuica = res.data.CHF.bid;
     })
  }

}
