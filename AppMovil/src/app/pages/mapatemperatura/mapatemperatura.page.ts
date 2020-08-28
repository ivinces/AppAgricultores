import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { TmpService } from 'src/app/service/tmp.service';
import { Nodo } from 'src/app/interface/nodo';
import { Cultivo } from 'src/app/interface/cultivo';
import { CultivoxNodo } from 'src/app/interface/cultivoxnodo';
import { CultivoxNodoxReg } from 'src/app/interface/cultivoxnodoxreg';

@Component({
  selector: 'app-mapatemperatura',
  templateUrl: './mapatemperatura.page.html',
  styleUrls: ['./mapatemperatura.page.scss'],
})
export class MapatemperaturaPage implements OnInit {
  map: Leaflet.Map;
  private c_actual: string;
  nods: Nodo;
  

  constructor(
    private tmpService: TmpService
  ) { 
  }

  ngOnInit() {
    
  }

  ionViewDidEnter() { this.leafletMap(); }


myIconNodo = Leaflet.icon({
  iconUrl: '../../assets/img/temp.png',
  iconSize: [36, 40],
  iconAnchor: [36, 40],
  popupAnchor: [-3, -76],
});

  leafletMap() {
    var umbrales_min;
    var umbrales_max;


    this.tmpService.getCultivoxUmbralesById(this.tmpService.cultivo_actual).subscribe(c=>{

      for(let um of c){
        umbrales_max=um.temp_max;
        umbrales_min=um.temp_min;
      }
      
    });


    this.tmpService.getCultivoxNodoxRegById(this.tmpService.cultivo_actual).subscribe(c=>{
      for(let ss of c){
        console.log(ss);
        this.map = Leaflet.map('mapIdtemp').setView([ss.latitud, ss.longitud], 16);
        Leaflet.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }).addTo(this.map);
      }
    });

    this.tmpService.getCultivoxNodoxRegByIdASC(this.tmpService.cultivo_actual).subscribe(c=>{
      for(let ss of c){

        Leaflet.marker([ss.latitud, ss.longitud], {icon: this.myIconNodo}).addTo(this.map)
          .bindPopup("Temperatura: "+ss.temperatura.toString())
          .openPopup()

          if(ss.temperatura>=umbrales_max){

            Leaflet.circle([ss.latitud, ss.longitud], {radius: 100, color:"red"}).addTo(this.map);
          }  
          if(ss.temperatura<umbrales_max && ss.temperatura>umbrales_min ){
  
            Leaflet.circle([ss.latitud, ss.longitud], {radius: 100, color:"green"}).addTo(this.map);
          }
          if(ss.temperatura<=umbrales_min){
  
            Leaflet.circle([ss.latitud, ss.longitud], {radius: 100, color:"blue"}).addTo(this.map);
          }
      }
    });
      
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
  
}
