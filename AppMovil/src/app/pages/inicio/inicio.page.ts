import { Component, OnInit } from '@angular/core';
import { TmpService } from '../../service/tmp.service';
import { Nodo } from 'src/app/interface/nodo';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  temp: Number;
  hum: Number;
  rad: Number;

  public nodosarray: Nodo[] = [];

  constructor(
    private tmpService: TmpService
  ) {}

  ngOnInit() {
    this.tmpService.setCultivoActual('2');
    this.tmpService.getAllNodo().subscribe( nod => {
      for(let data of nod){
        if(data.id_cultivo==this.tmpService.cultivo_actual){
          this.nodosarray.push(data);
        }
      }
    })
    this.tmpService.getAllRegistros().subscribe(reg => {
      for(let data of reg){
        //console.log(data);
        for(let data1 of this.nodosarray){
          if( data.id_nodo==data1.id_nodo){
            this.temp=data.temperatura;
            this.hum=data.humedad;
            this.rad=data.radiacion;
          }
        }
      }
    })
    
  }
}
