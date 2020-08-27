import { Component, OnInit } from '@angular/core';
import { TmpService } from '../../service/tmp.service';
import { Cultivo } from 'src/app/interface/cultivo';
import { AlertController } from '@ionic/angular';
import { element } from 'protractor';

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
  cultivo_len: string;

  customPopoverOptions: any = {  
    header: 'Cultivos',
    message: 'Seleccione el cultivo a visualizar',
    cssClass: 'my-custom-class'
  };  

  constructor(
    private tmpService: TmpService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    
    this.cultivo_actual=this.tmpService.cultivo_actual;
    this.tmpService.getAllCultivo().subscribe(cult => {
      this.cultivo=cult;
      this.tmpService.getCultivoById(cult.length).subscribe(c => {
        this.cult_nombre=c[0].nombre;
        console.log(c[0]);
      });
  
      this.tmpService.getCultivoxNodoxRegById(cult.length).subscribe(regis=>{
        this.temp=regis[0].temperatura;
          this.hum=regis[0].humedad;
          this.rad=regis[0].radiacion;
      });

    });
    
  }

  async selectCultivo(event){
    //const alert = await this.alertController.create({
      //cssClass: 'my-custom-class' 
    //}); 
    
    this.tmpService.setCultivoActual(event.target.value);
    this.tmpService.getCultivoxNodoxRegById(event.target.value).subscribe(regis=>{
        document.getElementById("dato").innerHTML=regis[0].temperatura.toString();
        document.getElementById("dato2").innerHTML=regis[0].humedad.toString();
        document.getElementById("dato3").innerHTML=regis[0].radiacion.toString();
        console.log(regis[0]);
    });
    this.ngOnInit();
  }

}
