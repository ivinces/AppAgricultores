import { Component, OnInit } from '@angular/core';
import { Umbrales_Cultivo } from 'src/app/interface/umbrales_cultivo';
import { Cultivo } from 'src/app/interface/cultivo';
import { TmpService } from 'src/app/service/tmp.service';
import { AlertController } from '@ionic/angular';
import { CultivoxUmbrales } from 'src/app/interface/cultivoxumbrales';

@Component({
  selector: 'app-umbrales',
  templateUrl: './umbrales.page.html',
  styleUrls: ['./umbrales.page.scss'],
})
export class UmbralesPage implements OnInit {

  temp_min; temp_max; humedad_min; humedad_max; radiacion_uv_min; radiacion_uv_max : number;
  id_umbrales:string;
  cultivo_actual:string;
  activo: boolean;
  
  constructor(
    private tmpService: TmpService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.cultivo_actual=this.tmpService.cultivo_actual;
    console.log(this.cultivo_actual);
    this.tmpService.getCultivoById(this.cultivo_actual).subscribe(cult => {
      for(let data of cult){
        this.activo=data.activo;
      }
    });
    this.tmpService.getCultivoxUmbralesById(this.cultivo_actual).subscribe(umb => {
      var tam=umb.length-1;
      console.log(umb[tam].temp_min);
      this.id_umbrales=umb[tam].id_umbrales;
      this.temp_min=umb[tam].temp_min;
      this.temp_max=umb[tam].temp_max;
      this.humedad_min=umb[tam].humedad_min;
      this.humedad_max=umb[tam].humedad_max;
      this.radiacion_uv_min=umb[tam].radiacion_uv_min;
      this.radiacion_uv_max=umb[tam].radiacion_uv_max;
    });    
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
      id_cultivo:this.cultivo_actual
    });  
    this.actualizado();

  }

  async actualizado(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Su cultivo ha sido actualizado',
      buttons: [
        { 
        text: 'Aceptar',
        role: 'Ok' 
        } 
        ] 
        }); 
    
    await alert.present();

  }
}
