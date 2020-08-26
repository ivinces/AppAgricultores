import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { Platform, AlertController, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import { min } from 'moment';

import { Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: 'inicio',
      icon: 'home'
    },
    {
      title: 'Perfil Cultivo',
      url: 'tabbedpage/perfil',
      icon: 'flower'
    },
    {
      title: 'Ubicación de Sensores',
      url: 'mapatab',
      icon: 'map'
    },
    {
      title: 'Parametros Ambientales',
      url: 'reportes',
      icon: 'partly-sunny'
    },
    {
      title: 'Reportes Personalizados',
      url: 'personalizado',
      icon: 'podium'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private localNotifications:LocalNotifications,
    private alertController: AlertController,
    private router: Router,
    private location: Location
  ) {
    this.initializeApp();
    this.backButtonEvent();
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
    this.notificacionevent();
    this.notificacionrecordatorio();
  }


  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
        if (this.router.url != '/inicio') {
          // await this.router.navigate(['/']);
          await this.location.back();
        } else if (this.router.url === '/inicio') {
          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            this.presentAlertConfirm();
          } else {
            navigator['app'].exitApp();
          }
        }
      });
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      cssClass: 'my-custom-class',
      message: '¿Quiere salir de AgoGo?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'Cerrar App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });
  
    await alert.present();
  }


  notificacionevent(){
    this.localNotifications.schedule({
      id: 1,
      title:'Bienvenido a AgroGo',
      text: 'La App que te ayuda a supervisar tu cultivo',
      sound: null,
      data: { page: 'My hidden message' },
      trigger:{in:5, unit:ELocalNotificationTriggerUnit.SECOND}
    });
  }

  notificacionrecordatorio(){
    this.localNotifications.schedule({
      id: 2,
      title:'No te olvides de tu cultivo',
      text: 'Ingresa a AgroGo y revisa el estado de tu cultivo',
      sound: null,
      data: { page: 'My hidden message' },
      trigger:{count:1, every: {hour:18, minute:5}}
    });
  }

  


}
