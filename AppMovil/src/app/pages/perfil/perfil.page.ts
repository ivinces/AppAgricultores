import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TmpService } from '../../service/tmp.service'
import { Cultivo } from 'src/app/interface/cultivo';
import { AlertController } from '@ionic/angular';
import { Registros } from 'src/app/interface/registros';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  cultivo : Cultivo;
  nombre_cultivo : string;
  descripcion : string;
  array: {}[] = [];

  cosechado_cultivo:boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tmpService: TmpService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.cultivo=this.tmpService.getCultivoActual();
    this.nombre_cultivo=this.cultivo.nombre
    this.descripcion=this.cultivo.descripcion;

    for(let est of this.tmpService.MatchEstados()){
      for(let nod of this.tmpService.MatchNodos()){
        if(est.id_nodo==nod.id_nodo){
          if(nod.activo){
            console.log({x:nod.cod_nodo,y:est.bateria,z:'Activo'});
            this.array.push({x:nod.cod_nodo,y:est.bateria,z:'Activo'});
          }
          else{
            console.log({x:nod.cod_nodo,y:est.bateria,z:'Inactivo'});
            this.array.push({x:nod.cod_nodo,y:est.bateria,z:'Inactivo'});
          }
        }
      }
    }

  }

  actualizarForm(){

    console.log(document.getElementById("nombre_cul")['value']);
    console.log(document.getElementById("textarea")['value']);
    console.log(Number(this.cultivo.id_cultivo))
    
    
    this.tmpService.putCultivo({
      nombre:document.getElementById("nombre_cul")['value'],
      descripcion:document.getElementById("textarea")['value'],
      nodo_central:this.cultivo.nodo_central,
      activo:this.cultivo.activo,
      id_cultivo:Number(this.cultivo.id_cultivo)
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
