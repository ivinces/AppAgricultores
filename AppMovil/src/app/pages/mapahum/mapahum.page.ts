import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-mapahum',
  templateUrl: './mapahum.page.html',
  styleUrls: ['./mapahum.page.scss'],
})
export class MapahumPage implements OnInit {
  map: Leaflet.Map;

  data=[
    {
      "nodo": "N01",
      "long": -79.958525,
      "lat": -2.149954,
      "sensores":[
        {
          "cod_sensor": "S01",
          "variable": "radiacion",
          "long": -79.958884,
          "lat": -2.150244,
          "registro": "0.4"
        },
        {
            "cod_sensor": "S02",
            "variable": "temperatura",
            "long": -79.959066,
            "lat": -2.149713,
            "registro": "28"
        },
        {
            "cod_sensor": "S03",
            "variable": "humedad",
            "long": -79.958144,
            "lat": -2.149965,
            "registro": "30"
        }
      ]
    },
    {
      "nodo": "N02",
      "long": -79.958159,
      "lat": -2.148343,
      "sensores":[
        {
          "cod_sensor": "S01",
          "variable": "radiacion",
          "long": -79.958328,
          "lat": -2.148257,
          "registro": "0.4"
        },
        {
            "cod_sensor": "S02",
            "variable": "temperatura",
            "long": -79.958031,
            "lat": -2.148233,
            "registro": "28"
        },
        {
            "cod_sensor": "S03",
            "variable": "humedad",
            "long": -79.957926,
            "lat": -2.148440,
            "registro": "30"
        }
      ]
    },
    {
      "nodo": "N03",
      "long": -79.957890,
      "lat": -2.149282,
      "sensores":[
        {
          "cod_sensor": "S01",
          "variable": "radiacion",
          "long": -79.958249,
          "lat": -2.148993,
          "registro": "0.4"
        },
        {
            "cod_sensor": "S02",
            "variable": "temperatura",
            "long": -79.957664 ,
            "lat": -2.149150,
            "registro": "28"
        },
        {
            "cod_sensor": "S03",
            "variable": "humedad",
            "long": -79.957746,
            "lat": -2.149492,
            "registro": "30"
        }
      ]
    }
]

  constructor() { }

  ngOnInit() {
  }
  ionViewDidEnter() { this.leafletMap(); }

  myIconhum = Leaflet.icon({
    iconUrl: '../../assets/img/hum.png',
    iconSize: [36, 40],
    iconAnchor: [36, 40],
    popupAnchor: [-3, -76],
  });
  myIconNodo = Leaflet.icon({
    iconUrl: '../../assets/img/nodo.png',
    iconSize: [36, 40],
    iconAnchor: [36, 40],
    popupAnchor: [-3, -76],
  });

  leafletMap() {
    this.map = Leaflet.map('mapIdhum').setView([this.data[0].lat, this.data[0].long], 17);
    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);

    for (const property of this.data) {
      Leaflet.marker([property.lat, property.long], {icon: this.myIconNodo}).addTo(this.map)
          .bindPopup(property.nodo)
          .openPopup();
      for(const sensores of property.sensores){
        if(sensores.variable=="humedad"){
          Leaflet.marker([sensores.lat, sensores.long], {icon: this.myIconhum}).addTo(this.map)
          .bindPopup(sensores.registro)
          .openPopup();
        }
      }
      
      
    }
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

}