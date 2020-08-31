import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ThrowStmt } from '@angular/compiler';
import { TmpService } from 'src/app/service/tmp.service';
import { CultivoxNodoxReg } from 'src/app/interface/cultivoxnodoxreg';
import * as moment from 'moment';

@Component({
  selector: 'app-personalizado',
  templateUrl: './personalizado.page.html',
  styleUrls: ['./personalizado.page.scss'],
})
export class PersonalizadoPage implements OnInit {
  @ViewChild('scatterChart') sChart;

  line: any;
  colorArray: any;

  buttonColorrad: string = '#4f9a94';
  buttonColorhum: string = '#4f9a94';
  buttonColortemp: string = '#4f9a94';

  humedadX:boolean;
  radiacionX:boolean;
  temperaturaX:boolean;

  humedadY:boolean;
  radiacionY:boolean;
  temperaturaY:boolean;

  datasets: any;

  data:{}[] = [];
  arrayregistros:{}[];
  dataX: number[]=[];
  dataY: number[]=[];
  labelx:string;
  labely:string;
  labeltitulo:string;

  cultivo_actual:string;
  cult_nombre:string;
  m_cultivo: CultivoxNodoxReg[]=[];

  customPopoverOptions: any = {  
    cssClass: 'my-custom-class'
  }; 

  constructor(
    private tmpService:TmpService
  ) { }

  ngOnInit() {
    this.humedadX=false;
    this.radiacionX=false;
    this.temperaturaX=false;
    this.humedadY=false;
    this.radiacionY=false;
    this.temperaturaY=false;
    this.labeltitulo='';
    this.labelx="eje x";
    this.labely="eje y";

    this.cultivo_actual=this.tmpService.cultivo_actual;

    this.tmpService.getCultivoById(this.cultivo_actual).subscribe(c => {
      this.cult_nombre=c[0].nombre;
      //console.log(c[0]);
    });
    
    this.tmpService.getCultivoxNodoxRegById(this.cultivo_actual).subscribe(reg => {
      this.m_cultivo=reg;
    });
  }

  ionViewDidEnter() {
    this.createLineChart();
  }

  getDataX(){
    this.dataX=[]
    for(let reg of this.m_cultivo){
      var reg_date=new Date(moment(reg.fecha_hora, "YYYY-MM-DD hh:mm:ss").toDate());
      if(this.humedadX){
        this.dataX.push(reg.humedad);
      }
      if(this.radiacionX){
        this.dataX.push(reg.radiacion);
      }
      if(this.temperaturaX){
        this.dataX.push(reg.temperatura);
      }
    }
    //console.log(this.dataX);
  }

  getDataY(){
    this.dataY=[]
    for(let reg of this.m_cultivo){
      var reg_date=new Date(moment(reg.fecha_hora, "YYYY-MM-DD hh:mm:ss").toDate());
      if(this.humedadY){
        this.dataY.push(reg.humedad);
      }
      if(this.radiacionY){
        this.dataY.push(reg.radiacion);
      }
      if(this.temperaturaY){
        this.dataY.push(reg.temperatura);
      }
    }
    //console.log(this.dataY);
  }

  mostrar(){
    this.setTitulo();
    this.createLineChart();
  }

  setTitulo(){
    this.labeltitulo=this.labelx+" vs "+this.labely;
  }

  setX(event){
    var valor=event.target.value;
    if(valor=="temperaturaX"){
      this.labelx="Temperatura";
      this.temperaturaX=true;
      this.humedadX=false;
      this.radiacionX=false;
    }
    if(valor=="humedadX"){
      this.labelx="Humedad";
      this.temperaturaX=false;
      this.humedadX=true;
      this.radiacionX=false;
    }
    if(valor=="radiacionX"){
      this.labelx="Radiación";
      this.temperaturaX=false;
      this.humedadX=false;
      this.radiacionX=true;
    }
  }

  setY(event){
    var valor=event.target.value;
    if(valor=="temperaturaY"){
      this.labely="Temperatura";
      this.temperaturaY=true;
      this.humedadY=false;
      this.radiacionY=false;
    }
    if(valor=="humedadY"){
      this.labely="Humedad";
      this.temperaturaY=false;
      this.humedadY=true;
      this.radiacionY=false;
    }
    if(valor=="radiacionY"){
      this.labely="Radiación";
      this.temperaturaY=false;
      this.humedadY=false;
      this.radiacionY=true;
    }
  }

  listaXY(){
    this.getDataX();
    this.getDataY();
    for(var i=0; i<this.dataX.length;i++){
      this.data.push({x:this.dataX[i],y:this.dataY[i]})
    }
    return this.data;
  }
/*   getData(){
    this.data=[];
    this.arrayregistros=[];
    this.labelx='';
    this.labely='';
    this.labeltitulo='';
    for(let reg of this.m_cultivo){
      var reg_date=new Date(moment(reg.fecha_hora, "YYYY-MM-DD hh:mm:ss").toDate());
      if(this.humedad && this.radiacion){
        this.data.push({x:reg.humedad,y:reg.radiacion});
        this.arrayregistros.push({w:reg_date,x:reg.temperatura,y:reg.humedad,z:reg.radiacion});
        this.labelx='Humedad';
        this.labely='Radiación';
        this.labeltitulo='Humedad vs Radiación';
      }
    
      if(this.humedad && this.temperatura){
        this.data.push({x:reg.humedad,y:reg.temperatura});
        this.arrayregistros.push({w:reg_date,x:reg.temperatura,y:reg.humedad,z:reg.radiacion});
        this.labelx='Humedad';
        this.labely='Temperatura';
        this.labeltitulo='Humedad vs Temperatura';
      }

      if(this.temperatura && this.radiacion){
        this.data.push({x:reg.temperatura,y:reg.radiacion});
        this.arrayregistros.push({w:reg_date,x:reg.temperatura,y:reg.humedad,z:reg.radiacion});
        this.labelx='Temperatura';
        this.labely='Radiación';
        this.labeltitulo='Temperatura vs Radiación';
      }
    }
    return this.data;
  } */

  compare(a, b) {
    const paramA = a.x;
    const paramB = b.x;
    let comparison = 0;
    if (paramA > paramB) {
      comparison = 1;
    } else if (paramA < paramB) {
      comparison = -1;
    }
    return comparison;
  }

/*   clickTempHum(event){
    this.temperatura=true;
    this.humedad=true;
    this.radiacion=false;
    this.createLineChart();
    if(this.temperatura && this.humedad){
      this.buttonColortemp = '#345465'
      this.buttonColorhum='#4f9a94'
      this.buttonColorrad='#4f9a94'
    }
  }

  clickHumRad(event){
    this.radiacion=true;
    this.humedad=true;
    this.temperatura=false;
    this.createLineChart();
    if(this.radiacion && this.humedad){
      this.buttonColorrad = '#345465'
      this.buttonColortemp = '#4f9a94'
      this.buttonColorhum='#4f9a94'
    }
  }

  clickTempRad(event){
    this.humedad=false;
    this.temperatura=true;
    this.radiacion=true;
    this.createLineChart();
    if(this.temperatura && this.radiacion){
      this.buttonColorhum = '#345465'
      this.buttonColorrad = '#4f9a94'
      this.buttonColortemp = '#4f9a94'
    }
  } */

  clearcanvas(){
    if(this.line){
      this.line.destroy();
    }
  }

  createLineChart(){
    this.clearcanvas();
    
    //this.setdataset();

    this.line = new Chart(this.sChart.nativeElement, {
      type: 'scatter',
      data: {
        //labels: this.getDataY(),
        datasets: [{
          label:this.labeltitulo,
            data: this.listaXY(),
            fill: false,
            backgroundColor: 'red', 
            borderColor: 'red',
            pointRadius:5,
        }]
    },
    options: {
      scales: {
          xAxes: [{
              type: 'linear',
              position: 'bottom',
              scaleLabel: {
                display: true,
                labelString: this.labelx
              }
          }],

          yAxes: [{
            type: 'linear',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: this.labely
            }
        }]
      }
  }
    });
  }

}
