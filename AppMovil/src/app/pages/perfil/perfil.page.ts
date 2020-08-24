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
  cultivo : Cultivo;
  nombre_cultivo : string;
  descripcion : string;
  nodo_central: string;
  activo: boolean;
  array: {}[] = [];
  ca: string;

  public nodosarray: Nodo[] = [];

  cosechado_cultivo:boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tmpService: TmpService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.tmpService.setCultivoActual(this.tmpService.cultivo_actual);

    this.ca=this.tmpService.cultivo_actual;
    this.tmpService.getAllCultivo().subscribe(cult => {
      for(let data of cult){
        if(data.id_cultivo==this.ca){
          this.nombre_cultivo=data.nombre;
          this.descripcion=data.descripcion;
          this.nodo_central=data.nodo_central;
          this.activo=data.activo;
        }
      }
    })
    this.tmpService.getAllNodo().subscribe( nod => {
      for(let data of nod){
        console.log(this.tmpService.cultivo_actual);
        if(data.id_cultivo==this.tmpService.cultivo_actual){
          this.nodosarray.push(data);
        }
      }
    })
    console.log(this.nodosarray);
    this.tmpService.getAllEstados().subscribe(est => {
      for(let data of est){
        for(let data1 of this.nodosarray){
          if(data.id_nodo==data1.id_nodo){
            if(data1.activo){
              console.log({x:data1.cod_nodo,y:data.bateria,z:'Activo'});
              this.array.push({x:data1.cod_nodo,y:data.bateria,z:'Activo'});
            }
            else{
              console.log({x:data1.cod_nodo,y:data.bateria,z:'Inactivo'});
              this.array.push({x:data1.cod_nodo,y:data.bateria,z:'Inactivo'});
            }
          }
        }
      }
    })
  }

  actualizarForm(){

    console.log(document.getElementById("nombre_cul")['value']);
    console.log(document.getElementById("textarea")['value']);
    console.log(Number(this.ca))
    
    
    this.tmpService.putCultivo({
      nombre:document.getElementById("nombre_cul")['value'],
      descripcion:document.getElementById("textarea")['value'],
      nodo_central:this.nodo_central,
      activo:this.activo,
      id_cultivo:Number(this.ca)
    })
    
    console.log("PUT");

  }

 async cosechado(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿El cultivo  fue cosechado?',
      message: 'Si usted coloca Aceptar el asume que el cultivo a sido cosechado y NO se mostrará nueva información del mismo',
      buttons: [
        { 
        text: 'Aceptar',
        role: 'Ok', 
        handler: () => {  
          this.cosechado_cultivo=true;
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

}
