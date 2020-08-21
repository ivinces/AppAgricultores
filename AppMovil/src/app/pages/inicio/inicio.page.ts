import { Component, OnInit } from '@angular/core';

import { Temperatura } from '../../interface/temperatura'
import { TmpService } from '../../service/tmp.service'
import { Humedad } from 'src/app/interface/humedad';
import { Radiacion } from 'src/app/interface/radiacion';
import { Cultivo } from 'src/app/interface/cultivo';
import { Sensor } from 'src/app/interface/sensor';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  temp: Temperatura[] = [];
  humd: Humedad[] = [];
  rad: Radiacion[] = [];
  cultivo: Cultivo[] = [];
  sensor: Sensor[] = [];
  id_sensor : string;
  nombre_cultivo : string;
  id_cultivo : string;
  temperatura_valor : string;
  humedad_valor : string;
  radiacion_valor : string;
  indice = 0;

  constructor(
    private tmpService: TmpService
  ) {}

  ngOnInit() {
    this.tmpService.getAllCultivo()
    .subscribe(cultivo => {
      this.cultivo = cultivo;
      this.nombre_cultivo=cultivo[this.indice].nombre;
      this.id_cultivo=cultivo[this.indice].id_cultivo;
    })

    this.tmpService.getAllSensor()
    .subscribe(sensor => {
      for(let data of sensor) {
        if(data.id_cultivo==this.id_cultivo){
          this.sensor.push(data);
        }
      }
    })

    this.tmpService.getAllTemperatura()
    .subscribe(temp => {
      for(let data of temp) {
        for(let data1 of this.sensor) {
          if(data.id_sensor==data1.id_sensor){
            this.temp.push(data);
          }
        }
      }
      temp=this.temp;
      this.temperatura_valor=temp.pop().valor;
    })

    this.tmpService.getAllRadiacion()
    .subscribe(rad => {
      for(let data of rad) {
        for(let data1 of this.sensor) {
          if(data.id_sensor==data1.id_sensor){
            this.rad.push(data);
          }
        }
      }
      rad=this.rad;
      this.radiacion_valor=rad.pop().valor;
    })
    
    this.tmpService.getAllHumedad()
    .subscribe(humd => {
      for(let data of humd) {
        for(let data1 of this.sensor) {
          if(data.id_sensor==data1.id_sensor){
            this.humd.push(data);
          }
        }
      }
      humd=this.humd;
      this.humedad_valor=humd.pop().valor;
    })

  }

}
