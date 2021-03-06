import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TmpService } from '../../service/tmp.service'
import { Cultivo } from 'src/app/interface/cultivo';
import { AlertController } from '@ionic/angular';
import { Registros } from 'src/app/interface/registros';
import { Nodo } from 'src/app/interface/nodo';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
  nombre_cultivo : string;
  descripcion : string;
  nodo_central: string;
  activo: boolean;
  array: {}[] = [];
  ca: string;

  cosechado_cultivo:boolean;
  activo_cultivo:boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tmpService: TmpService,
    public alertController: AlertController
    ) {}

  ngOnInit() {
    this.array=[];
    this.ca=this.tmpService.cultivo_actual;
    console.log(this.ca);
    this.tmpService.getCultivoById(this.ca).subscribe(cult => {
      for(let data of cult){
        this.nombre_cultivo=data.nombre;
        this.descripcion=data.descripcion;
        this.nodo_central=data.nodo_central;
        this.activo=data.activo;
      }
    });
    this.tmpService.getCultivoxNodoxEstxPerById(this.ca).subscribe(estados => {
      for(let data of estados){
        if(data.activo){
          console.log(data.id_nodo);
          console.log({x:data.cod_nodo,y:data.bateria_ultima,z:'Activo',id:data.id_nodo});
          this.array.push({x:data.cod_nodo,y:data.bateria_ultima,z:'Activo',id:data.id_nodo});
        }
        else{
          console.log({x:data.cod_nodo,y:data.bateria_ultima,z:'Inactivo',id:data.id_nodo});
          this.array.push({x:data.cod_nodo,y:data.bateria_ultima,z:'Inactivo',id:data.id_nodo});
        }
      }
    });

    if(!this.activo){
      this.cosechado_cultivo=true;
    }
    
  }

  actualizarForm(){

    console.log(document.getElementById("nombre_cul")['value']);
    console.log(document.getElementById("textarea")['value']);
    console.log(Number(this.ca))

    
    
    this.tmpService.putCultivo({
      nombre:document.getElementById("nombre_cul")['value'],
      descripcion:document.getElementById("textarea")['value'],
      nodo_central:this.nodo_central,
      activo:this.activo
    }, this.ca)
    
    console.log("PUT");

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

 async cosechado(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿El cultivo  fue cosechado?',
      message: 'Si usted coloca Aceptar el asume que el cultivo ha sido cosechado y NO se mostrará nueva información del mismo',
      buttons: [
        { 
        text: 'Aceptar',
        role: 'Ok', 
        handler: () => {  
          this.cosechado_cultivo=true;
          this.activo=false;
          this.actualizarForm();
          //this.activo=true;
        console.log('Confirm Ok'); 
        } 
        }, 
        { 
        text: 'Cancelar', 
        role: 'Cancel',
        handler: () => { 
          this.cosechado_cultivo=false;
          
        console.log('Confirm Cancel.');  
        } 
        } 
        ] 
        }); 
    
    await alert.present();
  }

  ionViewWillEnter(){
    this.ngOnInit();
  }

}
