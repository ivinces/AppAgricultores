import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { TmpService } from 'src/app/service/tmp.service';
import { Nodo } from 'src/app/interface/nodo';
import { Cultivo } from 'src/app/interface/cultivo';
import { CultivoxNodo } from 'src/app/interface/cultivoxnodo';
import { CultivoxNodoxReg } from 'src/app/interface/cultivoxnodoxreg';

@Component({
  selector: 'app-mapahum',
  templateUrl: './mapahum.page.html',
  styleUrls: ['./mapahum.page.scss'],
})
export class MapahumPage implements OnInit {
  map: Leaflet.Map;
  private c_actual: string;
  regarray: CultivoxNodoxReg[]=[];
  nods: Nodo;

  constructor(
    private tmpService: TmpService
  ) { }

  ngOnInit() {
    console.log(this.tmpService.getRegistroById(this.tmpService.cultivo_actual));
    this.tmpService.getRegistroById(this.tmpService.cultivo_actual).subscribe(c=>console.log(c));
    this.tmpService.getCultivoxNodoxRegById(this.tmpService.cultivo_actual).subscribe(reg=>{
      this.regarray=reg;
    });
    
  }

  ionViewDidEnter() { this.leafletMap(); }


myIconNodo = Leaflet.icon({
  iconUrl: '../../assets/img/hum.png',
  iconSize: [36, 40],
  iconAnchor: [36, 40],
  popupAnchor: [-3, -76],
});

  leafletMap() {

    this.tmpService.getCultivoxNodoxRegById(this.tmpService.cultivo_actual).subscribe(c=>{
      for(let ss of c){
        console.log(ss);
        this.map = Leaflet.map('mapIdhum').setView([ss.latitud, ss.longitud], 18);
        Leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
          attribution: 'edupala.com'
        }).addTo(this.map);
      }
    });

    this.tmpService.getCultivoxNodoxRegByIdASC(this.tmpService.cultivo_actual).subscribe(c=>{
      for(let ss of c){

        Leaflet.marker([ss.latitud, ss.longitud], {icon: this.myIconNodo}).addTo(this.map)
          .bindPopup("Humedad: "+ss.humedad.toString())
          .openPopup()
      }
    });
      
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

}