import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TmpService } from '../../service/tmp.service'
import { Cultivo } from 'src/app/interface/cultivo';
import { Sensor } from 'src/app/interface/sensor';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  cultivo: Cultivo[] = [];
  sensor: Sensor[] = [];
  id_sensor : string;
  nombre_cultivo : string;
  id_cultivo : string;
  nodo : string;
  activo : boolean;
  descripcion : string;
  indice=0;
  array: {}[] = [];

  nomcultivo:"CULTIVO MAIZ";
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private tmpService: TmpService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.tmpService.getAllCultivo()
    .subscribe(cultivo => {
      this.cultivo = cultivo;
      this.nombre_cultivo=cultivo[this.indice].nombre;
      this.descripcion=cultivo[this.indice].descripcion;
      this.id_cultivo=cultivo[this.indice].id_cultivo;
      this.nodo=cultivo[this.indice].nodo;
      this.activo=cultivo[this.indice].activo;
    })

    this.tmpService.getAllSensor()
    .subscribe(sensor => {
      for(let data of sensor) {
        if(data.id_cultivo==this.id_cultivo){
          this.sensor.push(data);
          if(data.temperatura){
            console.log({x:data.id_sensor,y:"temperatura",z:data.activo});
            this.array.push({x:data.id_sensor,y:"temperatura",z:data.activo});
          }
          else if(data.humedad){
            console.log({x:data.id_sensor,y:"humedad",z:data.activo});
            this.array.push({x:data.id_sensor,y:"humedad",z:data.activo});
          }
          else if(data.radiacion){
            console.log({x:data.id_sensor,y:"radiacion",z:data.activo});
            this.array.push({x:data.id_sensor,y:"radiacion",z:data.activo});
          }
        }
      }
    })
    
  }

  actualizarForm(){

    console.log(document.getElementById("nombre_cul")['value']);
    console.log(document.getElementById("textarea")['value']);
    console.log(Number(this.id_cultivo))
    
    
    this.tmpService.putCultivo({
    nombre:document.getElementById("nombre_cul")['value'],
    descripcion:document.getElementById("textarea")['value'],
    nodo:this.nodo,
    activo:this.activo,
    id:Number(this.id_cultivo)
  })
    
    console.log("PUT");

  }

 async cosechado(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿El cultivo '+this.nomcultivo+' fue cosechado?',
      message: 'Si usted coloca Aceptar el asume que el cultivo a sido cosechado y NO se mostrará nueva información del mismo',
      buttons: ['Rechazar', 'Aceptar']
    });
    
    await alert.present();
  }

}
