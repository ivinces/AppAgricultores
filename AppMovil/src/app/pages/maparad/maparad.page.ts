import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { TmpService } from 'src/app/service/tmp.service';
import { Nodo } from 'src/app/interface/nodo';
import { Cultivo } from 'src/app/interface/cultivo';
import { CultivoxNodo } from 'src/app/interface/cultivoxnodo';
import { CultivoxNodoxReg } from 'src/app/interface/cultivoxnodoxreg';

@Component({
  selector: 'app-maparad',
  templateUrl: './maparad.page.html',
  styleUrls: ['./maparad.page.scss'],
})
export class MaparadPage implements OnInit {
  map: Leaflet.Map;
  private c_actual: string;
  nods: Nodo;

  constructor(
    private tmpService: TmpService
  ) { }

  ngOnInit() { 
  }

  ionViewDidEnter() { this.leafletMap(); }


myIconNodo = Leaflet.icon({
  iconUrl: '../../assets/img/rad.png',
  iconSize: [36, 40],
  iconAnchor: [36, 40],
  popupAnchor: [-3, -76],
});

  leafletMap() {

    var baseLayer = Leaflet.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }
    );

    var umbrales_min;
    var umbrales_max;

      this.tmpService.getCultivoxUmbralesById(this.tmpService.cultivo_actual).subscribe(c=>{

        for(let um of c){
          umbrales_max=um.radiacion_uv_max;
          umbrales_min=um.radiacion_uv_min;
        }
        
      });

    
    
    var map;
    this.tmpService.getCultivoxNodoxRegById(this.tmpService.cultivo_actual).subscribe(c=>{
      for(let ss of c){
        console.log(ss);
        map = new Leaflet.Map('mapIdrad', {
          center: new Leaflet.LatLng(ss.latitud, ss.longitud),
          zoom: 16,
          layers: [baseLayer]
        });

        baseLayer.addTo(map);
      }
    });

    this.tmpService.getCultivoxNodoxRegByIdASC(this.tmpService.cultivo_actual).subscribe(c=>{
      for(let ss of c){

        Leaflet.marker([ss.latitud, ss.longitud], {icon: this.myIconNodo}).addTo(map)
          .bindPopup("Radiacion: "+ss.radiacion.toString())
          .openPopup()

        if(ss.radiacion>=umbrales_max){

          Leaflet.circle([ss.latitud, ss.longitud], {radius: 100, color:"red"}).addTo(map);
        }  
        if(ss.radiacion<umbrales_max && ss.radiacion>umbrales_min ){

          Leaflet.circle([ss.latitud, ss.longitud], {radius: 100, color:"green"}).addTo(map);
        }
        if(ss.radiacion<=umbrales_min){

          Leaflet.circle([ss.latitud, ss.longitud], {radius: 100, color:"blue"}).addTo(map);
        }
      }
    });
    
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

}
