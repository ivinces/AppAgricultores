import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-mapaprincipal',
  templateUrl: './mapaprincipal.page.html',
  styleUrls: ['./mapaprincipal.page.scss'],
})
export class MapaprincipalPage implements OnInit {

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
          "registro": "0.4"
        },
        {
            "cod_sensor": "S02",
            "variable": "temperatura",
            "registro": "28"
        },
        {
            "cod_sensor": "S03",
            "variable": "humedad",
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
          "registro": "0.4"
        },
        {
            "cod_sensor": "S02",
            "variable": "temperatura",
            "registro": "28"
        },
        {
            "cod_sensor": "S03",
            "variable": "humedad",
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
          "registro": "0.4"
        },
        {
            "cod_sensor": "S02",
            "variable": "temperatura",
            "registro": "28"
        },
        {
            "cod_sensor": "S03",
            "variable": "humedad",
            "registro": "30"
        }
      ]
    }
]
  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() { this.leafletMap(); }

myIconNodo = Leaflet.icon({
  iconUrl: '../../assets/img/nodo.png',
  iconSize: [36, 40],
  iconAnchor: [36, 40],
  popupAnchor: [-3, -76],
});

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([this.data[0].lat, this.data[0].long], 18);
    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);

    for (const property of this.data) {
      Leaflet.marker([property.lat, property.long], {icon: this.myIconNodo}).addTo(this.map)
          .bindPopup(property.nodo)
          .openPopup()
      
    }
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

}
