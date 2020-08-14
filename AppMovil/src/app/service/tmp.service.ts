import { Injectable } from '@angular/core';
import { Temperatura } from '../interface/temperatura'
import { HttpClient } from '@angular/common/http';
import { Humedad } from '../interface/humedad';
import { Radiacion } from '../interface/radiacion';
@Injectable({
  providedIn: 'root'
})
export class TmpService {

  private api='http://192.168.0.8:8081/api'

  constructor(private http: HttpClient) { }

  getAllTemperatura(){
    const path = `${this.api}/registro_temperatura`;

    return this.http.get<Temperatura[]>(path);
  }

  getAllHumedad(){
    const path = `${this.api}/registro_humedad`;

    return this.http.get<Humedad[]>(path);
  }

  getAllRadiacion(){
    const path = `${this.api}/registro_radiacion`;

    return this.http.get<Radiacion[]>(path);
  }

}
