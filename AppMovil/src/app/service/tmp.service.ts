import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registros } from '../interface/registros';
import { Cultivo } from '../interface/cultivo';
import { Umbrales_Cultivo } from '../interface/umbrales_cultivo';
import { Nodo } from '../interface/nodo';
import { Estado_Nodo } from '../interface/estado_nodo';

@Injectable({
  providedIn: 'root'
})
export class TmpService {

  private api='http://192.168.0.8:8085';

  public cultivo_actual: string = '0';
  public nodosarray: Nodo[] = [];
  public registrosarray: Registros[] = [];
  public estadosarray: Estado_Nodo[] = [];
  public cultivo: Cultivo;

  constructor(private http: HttpClient) { }

  getAllRegistros(){
    const path = `${this.api}/registros`;
    return this.http.get<Registros[]>(path);
  }

  getAllCultivo(){
    const path = `${this.api}/cultivo`;
    return this.http.get<Cultivo[]>(path);
  }

  getAllUmbrales(){
    const path = `${this.api}/umbrales_cultivo`;
    return this.http.get<Umbrales_Cultivo[]>(path);
  }

  getAllNodo(){
    const path = `${this.api}/nodo`;
    return this.http.get<Nodo[]>(path);
  }

  getAllEstados(){
    const path = `${this.api}/estado_nodo`;
    return this.http.get<Estado_Nodo[]>(path);
  }

  setCultivoActual(id){
    this.getAllCultivo().subscribe(cult => {
      for(let data of cult){
        if(data.id_cultivo==id){
          this.cultivo=data;
        }
      }
    })
  }

  getCultivoActual(){
    return this.cultivo;
  }

  MatchNodos(){
    this.getAllNodo().subscribe( nod => {
      for(let data of nod){
        if(data.id_cultivo==this.getCultivoActual().id_cultivo){
          this.nodosarray.push(data);
        }
      }
    })
    return this.nodosarray;
  }

  MatchEstados(){
    this.getAllEstados().subscribe(est => {
      for(let data of est){
        for(let data1 of this.MatchNodos()){
          if(data.id_nodo==data1.id_nodo){
            this.estadosarray.push(data);
          }
        }
      }
    })
    return this.estadosarray;
  }
  
  MatchRegistros(){
    this.getAllRegistros().subscribe(reg => {
      for(let data of reg){
        for(let data1 of this.MatchNodos()){
          if( data.id_nodo==data1.id_nodo){
            this.registrosarray.push(data);
          }
        }
      }
    })
    return this.registrosarray;
  }

  postUmbrales(dataToSend){
    const path = `${this.api}/umbrales_cultivo`;
    this.http.post(path,{data:JSON.stringify(dataToSend)},{headers: new HttpHeaders({"Content-Type":"application/json"})}).subscribe((data)=>{
      console.log(data)
    })
    console.log("se hizo post umbrales")
  }

  putCultivo(dataToSend){
    const path = `${this.api}/cultivo`;
    this.http.put(path,{data:JSON.stringify(dataToSend)},{headers: new HttpHeaders({"Content-Type":"application/json"})}).subscribe((data)=>{
      console.log(data)
    })
    console.log("se hizo put cultivo")
  }

}
