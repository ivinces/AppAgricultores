import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})


export class ReportesPage implements OnInit {
  @ViewChild('barChart') barChart;
  line: any;
  colorArray: any;

  humedad:boolean;
  radiacion:boolean;
  temperatura:boolean;
  year:boolean;
  mes:boolean;
  dia:boolean;
  semana:boolean;

  datasets: any;
  array: {}[] = [];
  time: {}[] = [];

  constructor() { }

  ngOnInit() {
    this.humedad=false;
    this.radiacion=false;
    this.temperatura=true;
    this.dia=true;
  }

  ionViewDidEnter() {
    this.createLineChart();
  }

  setdataset(){
    this.array=[];

    if(this.humedad){
      this.array.push({
        label: 'Humedad',
        yAxesID: 'y0',
        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
        backgroundColor: '#ddee44',
        borderColor: '#ddee44',
        borderWidth: 1,
        fill: false

      });
    }
    if(this.radiacion){
      this.array.push({
        label: 'Radiacion',
        data: [0.5, 0.8, 0.1, 0.9, 0.9, 0.5, 0.7, 0.12],
        backgroundColor: '#dd1144', 
        borderColor: '#dd1144',
        borderWidth: 1,
        fill: false,
        yAxisID: 'y1'
        
      });
    }

    if(this.temperatura){
      this.array.push({
        label: 'Temperatura',
        yAxesID: 'y0',
        data: [17, 18, 20, 20, 19, 20, 20, 17],
        backgroundColor: '#ddee44',
        borderColor: '#ddee44',
        borderWidth: 1,
        fill: false

      });
    }

  }

  settimeAxesX(){
    if(this.semana){
      this.time=[{     
        type: 'time',
        time: {
            unit: 'week'
        }
      }]
    }
    if(this.dia){
      this.time=[{     
        type: 'time',
        time: {
            unit: 'day'
        }
      }]
    }
    if(this.mes){
      this.time=[{     
        type: 'time',
        time: {
            unit: 'month'
        }
      }]
    }
    if(this.year){
      this.time=[{     
        type: 'time',
        time: {
            unit: 'year'
        }
      }]
    }

  }

  clickDay(event){
    this.dia=true;
    this.semana=false;
    this.mes=false;
    this.year=false;
    this.createLineChart();
  }

  clickMonth(event){
    this.dia=false;
    this.semana=false;
    this.mes=true;
    this.year=false;
    this.createLineChart();
  }

  clickWeek(event){
    this.dia=false;
    this.semana=true;
    this.mes=false;
    this.year=false;
    this.createLineChart();
  }

  clickYear(event){
    this.dia=false;
    this.semana=false;
    this.mes=false;
    this.year=true;
    this.createLineChart();
  }

  clickTemp(event){
    this.temperatura=!this.temperatura;
    this.createLineChart();
  }

  clickRad(event){
    this.radiacion=!this.radiacion;
    this.createLineChart();
  }

  clickHumidity(event){
    this.humedad=!this.humedad;
    this.createLineChart();
  }

  clearcanvas(){
    this.barChart.width=this.barChart.width;
  }

  createLineChart(){
    this.setdataset();
    this.settimeAxesX();
    this.clearcanvas();

    this.line = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: this.array,
      },
      options: {
        scales: {
          xAxes: [/*{
            type: 'time',
            time: {
                unit: 'week'
            }
          }*/],
          yAxes: [
            {
              id: 'y',
              type: 'linear',
              position: 'left',
              scaleLabel: {
                display: true,
                labelString: 'Temperatura/Humedad'
              }
            }, {
              id: 'y1',
              type: 'linear',
              position: 'right',
              ticks: {
                max: 1,
                min: 0
              },
              scaleLabel: {
                display: true,
                labelString: 'Radiación'
              },
              // grid line settings
							gridLines: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
              }
            }
          ]
        }
      }
    });
  }

}
