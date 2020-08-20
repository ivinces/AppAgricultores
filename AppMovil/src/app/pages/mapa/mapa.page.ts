import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map: Leaflet.Map;

  data=[
      {
          "cod_sensor": "S01",
          "variable": "radiacion",
          "long": -79.958292,
          "lat": -2.148461
      },
      {
          "cod_sensor": "S02",
          "variable": "temperatura",
          "long": -79.958774,
          "lat": -2.149404
      },
      {
          "cod_sensor": "S03",
          "variable": "humedad",
          "long": -79.957541,
          "lat": -2.150112
      }
  
]

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() { this.leafletMap(); }

  myIcon = Leaflet.icon({
    iconUrl: '../../assets/img/temp.png',
    iconSize: [54, 60],
    iconAnchor: [54, 60],
    popupAnchor: [-3, -76],
});
myIconrad = Leaflet.icon({
  iconUrl: '../../assets/img/rad.png',
  iconSize: [54, 60],
  iconAnchor: [54, 60],
  popupAnchor: [-3, -76],
});
myIconhum = Leaflet.icon({
  iconUrl: '../../assets/img/hum.png',
  iconSize: [54, 60],
  iconAnchor: [54, 60],
  popupAnchor: [-3, -76],
});

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([-2.149340, -79.958147], 17);
    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);

    for (const property of this.data) {
      if(property.variable=="temperatura"){
        Leaflet.marker([property.lat, property.long], {icon: this.myIcon}).addTo(this.map)
        .bindPopup(property.cod_sensor)
        .openPopup();

      }
      else if(property.variable=="radiacion"){
        Leaflet.marker([property.lat, property.long], {icon: this.myIconrad}).addTo(this.map)
        .bindPopup(property.cod_sensor)
        .openPopup();

      }
      else if(property.variable=="humedad"){
        Leaflet.marker([property.lat, property.long], {icon: this.myIconhum}).addTo(this.map)
        .bindPopup(property.cod_sensor)
        .openPopup();

      }
      
    }
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

}
