import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { keyApi } from "../keyAPI.js";

interface Clima {
  nomeCidade: string;
  temperatura: string;
  sensacaoTermica: string;
  umidade: string;
  descricao: string;
}

@Component({
  selector: "app-clima",
  templateUrl: "./clima.page.html",
  styleUrls: ["./clima.page.scss"],
})
export class ClimaPage implements OnInit {
  public cep: string;
  private latitude: string;
  private longitude: string;
  public clima: Clima;
  public mostrarCard: boolean;
  public show:boolean;

  constructor() {
    this.clima = {
      "nomeCidade": "",
      "temperatura": "",
      "sensacaoTermica": "",
      "umidade": "",
      "descricao": "",
    }
    this.mostrarCard = false;
    this.show = false;
  }

  desativarSpinner(){
    setTimeout (() => {  
      this.show =  false;
      this.mostrarCard = true;  
    },  1000 ); 
  }

  ngOnInit() {
  }

  verificarCepValido() {
    if (
      this.cep != null &&
      this.cep.length == 8 &&
      !isNaN(parseFloat(this.cep))
    ) {
      return true;
    } else {
      alert(
        "Cep inválido, o cep deve conter 8 caracteres(Sendo apenas números)"
      );
      return false;
    }
  }

  async buscarClima() {
    this.mostrarCard = false;
    if (this.verificarCepValido()) {
      await axios
        .get(`https://cep.awesomeapi.com.br/json/${this.cep}`)
        .then((res) => {
          this.latitude = res.data.lat;
          this.longitude = res.data.lng;
        })
        .then(() => {
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=metric&lang=pt&APPID=${keyApi}`
            )
            .then((res) => {
              this.clima = {
                temperatura: res.data.main.temp,
                sensacaoTermica: res.data.main.feels_like,
                umidade: res.data.main.humidity,
                nomeCidade: res.data.name,
                descricao: res.data.weather[0].description,
              };
              console.log(res.data)
            });
        })
        .then(()=> {
          this.show = true;
          this.desativarSpinner();
        })
        .catch(() =>
          alert(
            "Cep inválido, o cep deve conter 8 caracteres(Sendo apenas números)"
          )
        );
    }
  }
}
