import { Component, OnInit } from '@angular/core';
import { Umbrales_Cultivo } from 'src/app/interface/umbrales_cultivo';
import { Cultivo } from 'src/app/interface/cultivo';
import { TmpService } from 'src/app/service/tmp.service';

@Component({
  selector: 'app-umbrales',
  templateUrl: './umbrales.page.html',
  styleUrls: ['./umbrales.page.scss'],
})
export class UmbralesPage implements OnInit {

  cultivo: Cultivo[] = [];
  umbrales: Umbrales_Cultivo[] = [];
 
  id_cultivo : string;

  temp_min; temp_max; humedad_min; humedad_max; radiacion_uv_min; radiacion_uv_max : Number;

  indice=0;
  array: {}[] = [];

  constructor(
    private tmpService: TmpService
  ) { }

  ngOnInit() {
    this.tmpService.getAllCultivo()
    .subscribe(cultivo => {
      this.cultivo = cultivo;
      this.id_cultivo=cultivo[this.indice].id_cultivo;
    })

    this.tmpService.getAllUmbrales()
    .subscribe(umbral => {
      for(let data of umbral) {
        if(data.id_cultivo==this.id_cultivo){
          this.umbrales.push(data);
          this.temp_min=data.temp_min;
          this.temp_max=data.temp_max;
          this.humedad_min=data.humedad_min;
          this.humedad_max=data.humedad_max;
          this.radiacion_uv_min=data.radiacion_uv_min;
          this.radiacion_uv_max=data.radiacion_uv_max;
        }
      }
    })
  }
  actualizarForm(){
    console.log(document.getElementById("temp_min")['value']);
    
    this.tmpService.postUmbrales({
    temp_min:document.getElementById("temp_min")['value'],
    temp_max:document.getElementById("temp_max")['value'],
    humedad_min:document.getElementById("humedad_min")['value'],
    humedad_max:document.getElementById("humedad_max")['value'],
    radiacion_uv_min:document.getElementById("radiacion_uv_min")['value'],
    radiacion_uv_max:document.getElementById("radiacion_uv_max")['value'],
    id_cultivo:Number(this.id_cultivo)})
    
    console.log("POST");
  }
}
