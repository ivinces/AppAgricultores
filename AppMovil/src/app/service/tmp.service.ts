import { Injectable } from '@angular/core';
import { Temperatura } from '../interface/temperatura'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Humedad } from '../interface/humedad';
import { Radiacion } from '../interface/radiacion';
import { Cultivo } from '../interface/cultivo';
import { Umbrales_Cultivo } from '../interface/umbrales_cultivo';
import { Sensor } from '../interface/sensor';
import { Estado_Sensor } from '../interface/estado_sensor';

@Injectable({
  providedIn: 'root'
})
export class TmpService {

  private api='http://localhost:8085';

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

  getAllCultivo(){
    const path = `${this.api}/cultivo`;
    return this.http.get<Cultivo[]>(path);
  }

  getAllUmbrales(){
    const path = `${this.api}/umbrales_cultivo`;
    return this.http.get<Umbrales_Cultivo[]>(path);
  }

  getAllSensor(){
    const path = `${this.api}/sensor`;
    return this.http.get<Sensor[]>(path);
  }

  getAllEstados(){
    const path = `${this.api}/estado_sensor`;
    return this.http.get<Estado_Sensor[]>(path);
  }

  postUmbrales(dataToSend){
    const path = "http://localhost:8085/umbrales_cultivo";
    this.http.post(path,{data:JSON.stringify(dataToSend)},{headers: new HttpHeaders({"Content-Type":"application/json"})}).subscribe((data)=>{
      console.log(data)
    })
    console.log("se hizo post umbrales")
  }

  putCultivo(dataToSend){
    const path = "http://localhost:8085/cultivo";
    this.http.put(path,{data:JSON.stringify(dataToSend)},{headers: new HttpHeaders({"Content-Type":"application/json"})}).subscribe((data)=>{
      console.log(data)
    })
    console.log("se hizo put cultivo")
  }

}
