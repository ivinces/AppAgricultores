import { Component, OnInit } from '@angular/core';
import { TmpService } from '../../service/tmp.service';
import { Cultivo } from 'src/app/interface/cultivo';
import { AlertController } from '@ionic/angular';

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
  cultivo: Cultivo[];

  customPopoverOptions: any = {  
    header: 'Cultivos',
    message: 'Seleccione el cultivo a visualizar',
    cssClass: 'my-custom-interface'
  };  

  constructor(
    private tmpService: TmpService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.cultivo_actual=this.tmpService.cultivo_actual;
    this.tmpService.getAllCultivo().subscribe(cult => {
      this.cultivo=cult;
    });
    this.tmpService.getCultivoById(this.cultivo_actual).subscribe(c => {
      this.cult_nombre=c[0].nombre;
      console.log(c[0]);
    })
    this.tmpService.getCultivoxNodoxRegById(this.cultivo_actual).subscribe(regis=>{
      for (let reg of regis) {
        this.temp=reg.temperatura;
        this.hum=reg.humedad;
        this.rad=reg.radiacion;
      }
    });
    

  }
  
  async selectCultivo(event){
    //const alert = await this.alertController.create({
      //cssClass: 'my-custom-class' 
    //}); 
    
    this.tmpService.setCultivoActual(event.target.value);
    this.tmpService.getCultivoxNodoxRegById(event.target.value).subscribe(regis=>{
      for (let reg of regis) {
        document.getElementById("dato").innerHTML=reg.temperatura.toString();
        document.getElementById("dato2").innerHTML=reg.humedad.toString();
        document.getElementById("dato3").innerHTML==reg.radiacion.toString();
      }
    });
    this.ngOnInit();
  }

}
