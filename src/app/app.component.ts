import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/servicesAuth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Clima',
      url: '/folder/Thunderstorm',
      icon: 'thunderstorm'
    },
    {
      title: 'Lista de Compra',
      url: '/lista-compras',
      icon: 'list'
    },
    {
      title: 'Valor real',
      url: '/valor-real',
      icon: 'cash'
    },
    {
      title: 'Excluir Conta',
      url: '/folder/Trash',
      icon: 'trash'
    },
  ];
 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth:AuthService

  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    /*const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }*/
  }
}
