import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthService } from "./services/servicesAuth/auth.service";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Lista de Compra",
      url: "/lista-compras",
      icon: "list",
    },
    {
      title: "Clima",
      url: "/clima",
      icon: "thunderstorm",
    },

    {
      title: "Valor real",
      url: "/valor-real",
      icon: "cash",
    },
  ];

  public selectSair: boolean;
  public selectExcluir: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.initializeApp();
    this.selectSair = false;
  }

  async selectSairAcao(titulo: string, tipoExcluir: boolean) {
    if (this.auth.verificarUsuarioLogado()) {
      tipoExcluir ? (this.selectExcluir = true) : (this.selectSair = true);

      const alert = await this.alertController.create({
        header: `Tem certeza que deseja ${titulo} ?`,
        buttons: [
          {
            text: "Não",
            role: "cancel",
            handler: () => {
              tipoExcluir
                ? (this.selectExcluir = false)
                : (this.selectSair = false);
            },
          },
          {
            text: "Sim",
            handler: () => {
              tipoExcluir
                ? this.auth.excluirUsuario()
                : this.auth.deslogarUsuario();
              this.router.navigate(["/cadastro"]);
              tipoExcluir
                ? (this.selectExcluir = false)
                : (this.selectSair = false);
            },
          },
        ],
      });

      await alert.present();
    }
    else{
      alert('Voce deve logar primeiro para acessar essa funcionalidade')
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {}
}
