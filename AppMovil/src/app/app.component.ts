import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: 'inicio',
      icon: 'home'
    },
    {
      title: 'Perfil Cultivo',
      url: 'pagetabs',
      icon: 'flower'
    },
    {
      title: 'Temperatura vs Tiempo',
      url: 'tempvstiempo',
      icon: 'thermometer'
    },
    {
      title: 'Humedad vs Tiempo',
      url: 'humivstiempo',
      icon: 'water'
    },
    {
      title: 'Radiación vs Tiempo',
      url: 'radvstiempo',
      icon: 'sunny'
    },
    {
      title: 'Reportes Personalizados',
      url: 'reportes',
      icon: 'podium'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
    const path = window.location.pathname.split('pages/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
