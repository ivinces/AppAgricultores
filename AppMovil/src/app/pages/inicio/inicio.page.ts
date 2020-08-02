import { Component, OnInit } from '@angular/core';

import { Temperatura } from '../../interface/temperatura'
import { TmpService } from '../../service/tmp.service'
import { Humedad } from 'src/app/interface/humedad';
import { Radiacion } from 'src/app/interface/radiacion';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  temp: Temperatura[] = [];
  humd: Humedad[] = [];
  rad: Radiacion[] = [];
  temperatura_valor : string;
  humedad_valor : string;
  radiacion_valor : string;

  constructor(
    private tmpService: TmpService
  ) {}

  ngOnInit() {
    this.tmpService.getAllTemperatura()
    .subscribe(temp => {
      this.temp = temp;
      this.temperatura_valor=temp.pop().valor;
    })

    this.tmpService.getAllRadiacion()
    .subscribe(rad => {
      this.rad = rad;
      this.radiacion_valor=rad.pop().valor;
    })
    
    this.tmpService.getAllHumedad()
    .subscribe(humd => {
      this.humd = humd;
      this.humedad_valor=humd.pop().valor;
    })

  }

}
