import { Component, OnInit } from '@angular/core';
import { TmpService } from '../../service/tmp.service';
import { Cultivo } from 'src/app/interface/cultivo';
import { AlertController } from '@ionic/angular';
import { element } from 'protractor';
import { Router } from '@angular/router';

//import { Content } from 'ionic-angular'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  temp: Number;
  hum: Number;
  rad: Number;
  cultivo_actual: string;
  cult_nombre: string;
  cultivo_len: string;

  customPopoverOptions: any = {  
    header: 'Cultivos',
    message: 'Seleccione el cultivo a visualizar',
    cssClass: 'my-custom-class'
  };  

  constructor(
    private tmpService: TmpService,
    public alertController: AlertController,
    public router: Router
  ) {
    this.cultivo_actual=this.tmpService.cultivo_actual;
    this.actualizar();
  }

  ngOnInit() {
    
    console.log(this.cultivo_actual);

    this.tmpService.getCultivoById(this.cultivo_actual).subscribe(c => {
      this.cult_nombre=c[0].nombre;
      console.log(c[0]);
    });
    this.tmpService.setCultivoActual(this.cultivo_actual);
    this.tmpService.getCultivoxNodoxRegById(this.cultivo_actual).subscribe(regis=>{
      this.temp=regis[0].temperatura;
        this.hum=regis[0].humedad;
        this.rad=regis[0].radiacion;
    });
    
    
  }

  async selectCultivo(event){
    this.tmpService.setCultivoActual(event.target.value);
    this.tmpService.getCultivoxNodoxRegById(event.target.value).subscribe(regis=>{
        document.getElementById("dato").innerHTML=regis[0].temperatura.toString();
        document.getElementById("dato2").innerHTML=regis[0].humedad.toString();
        document.getElementById("dato3").innerHTML=regis[0].radiacion.toString();
        console.log(regis[0]);
    });
  }

  doRefresh(event) {
    console.log(this.cultivo_actual);
    this.tmpService.getCultivoxNodoxRegById(this.cultivo_actual).subscribe(regis=>{
      document.getElementById("dato").innerHTML=regis[0].temperatura.toString();
      document.getElementById("dato2").innerHTML=regis[0].humedad.toString();
      document.getElementById("dato3").innerHTML=regis[0].radiacion.toString();
      console.log(regis[0]);
  });
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  actualizar(){
    this.tmpService.getCultivoxNodoxRegById(this.cultivo_actual).subscribe(regis=>{
      document.getElementById("dato").innerHTML=regis[0].temperatura.toString();
      document.getElementById("dato2").innerHTML=regis[0].humedad.toString();
      document.getElementById("dato3").innerHTML=regis[0].radiacion.toString();
      console.log(regis[0]);
    });
  }

  cambiarCultivo(){
    console.log("Aaaa");
    this.router.navigateByUrl('/tabbedcultivos');
  }

}
