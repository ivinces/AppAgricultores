import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ThrowStmt } from '@angular/compiler';

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
  buttonColortemp: string = '#345465';

  humedad:boolean;
  radiacion:boolean;
  temperatura:boolean;

  datasets: any;

  arrayhumedad=[30,29,29,31,30];
  arraytemperatura=[20,18,19,20,21];
  arrayradiacion=[0.4,0.2,0.3,0.4,0.3];

  data:{}[] = [];

  labelx:string;
  labely:string;
  labeltitulo:string;

  constructor() { }

  ngOnInit() {
    this.humedad=true;
    this.radiacion=false;
    this.temperatura=true;
    this.labeltitulo='Humedad vs Temperatura';
  }

  ionViewDidEnter() {
    this.createLineChart();
  }

  getData(){
    this.data=[];
    this.labelx='';
    this.labely='';
    this.labeltitulo='';
    if(this.humedad && this.radiacion){
      for(let i = 0; i < this.arrayhumedad.length; i++){
        this.data.push({x:this.arrayhumedad[i],y:this.arrayradiacion[i]});
      }
      this.labelx='Humedad';
      this.labely='Radiación';
      this.labeltitulo='Humedad vs Radiación';
    }
    if(this.humedad && this.temperatura){
      for(let i = 0; i < this.arrayhumedad.length; i++){
        this.data.push({x:this.arrayhumedad[i],y:this.arraytemperatura[i]});
      }
      this.labelx='Humedad';
      this.labely='Temperatura';
      this.labeltitulo='Humedad vs Temperatura';
    }
    if(this.temperatura && this.radiacion){
      for(let i = 0; i < this.arrayhumedad.length; i++){
        this.data.push({x:this.arraytemperatura[i],y:this.arrayradiacion[i]});
      }
      this.labelx='Temperatura';
      this.labely='Radiación';
      this.labeltitulo='Temperatura vs Radiación';
    }
    return this.data;
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
    this.sChart.width=this.sChart.width;
  }

  createLineChart(){
    this.clearcanvas();
    
    //this.setdataset();

    this.line = new Chart(this.sChart.nativeElement, {
      type: 'scatter',
      data: {
        datasets: [{
          label:this.labeltitulo,
            data: this.getData(),
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
