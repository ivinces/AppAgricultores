import { Injectable } from '@angular/core';
import { Registros } from '../interface/registros'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cultivo } from '../interface/cultivo';
import { Umbrales_Cultivo } from '../interface/umbrales_cultivo';
import { Nodo } from '../interface/nodo';
import { Estado_Nodo } from '../interface/estado_nodo';
import { CultivoxNodo } from '../interface/cultivoxnodo';
import { CultivoxUmbrales } from '../interface/cultivoxumbrales';
import { CultivoxNodoxReg } from '../interface/cultivoxnodoxreg';
import { CultivoxNodoxEst } from '../interface/cultivoxnodoxest'
import { CultivoxNodoxEstxPer } from '../interface/cultivoxnodoxestxper';



@Injectable({
  providedIn: 'root'
})
export class TmpService {

  public cultivo: Cultivo;
  public cultivo_actual: string='1';
  
  private api='http://localhost:8085';

  constructor(private http: HttpClient) { }

  getAllRegistros(){
    const path = `${this.api}/registros`;
    return this.http.get<Registros[]>(path);
  }

  getRegistroById(id){
    const path = this.api+"/registros/"+id;
    return this.http.get<Registros[]>(path);
  }

  getAllCultivo(){
    const path = `${this.api}/cultivo`;
    return this.http.get<Cultivo[]>(path);
  }

  getCultivoById(id){
    const path = this.api+"/cultivo/"+id;
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

  getNodoById(id){
    const path = this.api+"/nodo/"+id;
    return this.http.get<Nodo[]>(path);
  }
  
  getAllEstados(){
    const path = `${this.api}/estado`;
    return this.http.get<Estado_Nodo[]>(path);
  }

  getEstadosById(id){
    const path = this.api+"/estado/"+id;
    return this.http.get<Estado_Nodo[]>(path);
  }

  setCultivoActual(id){
    this.getAllCultivo().subscribe(cult => {
      for(let data of cult){
        if(data.id_cultivo==id){
          this.cultivo=data;
          this.cultivo_actual=data.id_cultivo;
        }
      }
    })
  }

  getAllCultivoxNodo(){
    const path = `${this.api}/cultivoxnodo`;
    return this.http.get<CultivoxNodo[]>(path);

  }
  getCultivoxNodoById(id){
    const path = this.api+"/cultivoxnodo/"+id;
    return this.http.get<CultivoxNodo[]>(path);
  }

  getAllCultivoxUmbrales(){
    const path = `${this.api}/cultivoxumbrales`;
    return this.http.get<CultivoxUmbrales[]>(path);

  }
  getCultivoxUmbralesById(id){
    const path = this.api+"/cultivoxumbrales/"+id;
    return this.http.get<CultivoxUmbrales[]>(path);
  }

  getAllCultivoxNodoxReg(){
    const path = `${this.api}/cultivoxnodoxregistros`;
    return this.http.get<CultivoxNodoxReg[]>(path);

  }
  getCultivoxNodoxRegById(id){
    const path = this.api+"/cultivoxnodoxregistros/"+id;
    return this.http.get<CultivoxNodoxReg[]>(path);
  }

  getCultivoxNodoxRegByIdASC(id){
    const path = this.api+"/cultivoxnodoxregistrosASC/"+id;
    return this.http.get<CultivoxNodoxReg[]>(path);
  }

  getAllCultivoxNodoxEst(){
    const path = `${this.api}/cultivoxnodoxestados`;
    return this.http.get<CultivoxNodoxEst[]>(path);

  }
  getCultivoxNodoxEstById(id){
    const path = this.api+"/cultivoxnodoxestados/"+id;
    return this.http.get<CultivoxNodoxEst[]>(path);
  }

  getCultivoxNodoxEstxPerById(id){
    const path = this.api+"/cultivoxnodoxestadosxper/"+id;
    return this.http.get<CultivoxNodoxEstxPer[]>(path);
  }

  postUmbrales(dataToSend){
    const path = this.api+"/umbrales";
    this.http.post(path,{data:JSON.stringify(dataToSend)},{headers: new HttpHeaders({"Content-Type":"application/json"})}).subscribe((data)=>{
      console.log(data)
    })
    console.log("se hizo post umbrales")
  }

  putCultivo(dataToSend,id){
    const path = this.api+"/cultivo/"+id;
    this.http.put(path,{data:JSON.stringify(dataToSend)},{headers: new HttpHeaders({"Content-Type":"application/json"})}).subscribe((data)=>{
      console.log(data)
    })
    console.log("se hizo put cultivo")
  }

  putEstadoNodo(dataToSend,id){
    const path = this.api+"/nodo/"+id;
    this.http.put(path,{data:JSON.stringify(dataToSend)}).subscribe((data)=>{
      console.log(data)
    })
    console.log("se hizo put cultivo")
  }

}
