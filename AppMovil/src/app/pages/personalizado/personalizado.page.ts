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

  humedad:boolean;
  radiacion:boolean;
  temperatura:boolean;

  datasets: any;

  data:{}[] = [];
  arrayregistros:{}[];

  labelx:string;
  labely:string;
  labeltitulo:string;

  cultivo_actual:string;
  cult_nombre:string;
  m_cultivo: CultivoxNodoxReg[]=[];

  constructor(
    private tmpService:TmpService
  ) { }

  ngOnInit() {
    this.humedad=true;
    this.radiacion=false;
    this.temperatura=true;
    this.labeltitulo='Humedad vs Temperatura';

    this.cultivo_actual=this.tmpService.cultivo_actual;

    this.tmpService.getCultivoById(this.cultivo_actual).subscribe(c => {
      this.cult_nombre=c[0].nombre;
      console.log(c[0]);
    });
    
    this.tmpService.getCultivoxNodoxRegById(this.cultivo_actual).subscribe(reg => {
      this.m_cultivo=reg;
    });
  }

  ionViewDidEnter() {
    this.createLineChart();
  }

  getData(){
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
  }

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

  clickTempHum(event){
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
  }

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
        datasets: [{
          label:this.labeltitulo,
            data: this.getData().sort(this.compare),
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
