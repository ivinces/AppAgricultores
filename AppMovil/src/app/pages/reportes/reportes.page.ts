import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Temperatura } from '../../interface/temperatura';
import { Humedad } from '../../interface/humedad';
import { Radiacion } from '../../interface/radiacion';
import { TmpService } from '../../service/tmp.service';

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

  datasets: any;
  array: {}[] = [];
  time: {}[] = [];

  temp: Temperatura[] = [];
  array2: {}[] = [];
  hum: Humedad[] = [];
  array3: {}[] = [];
  rad: Radiacion[] = [];
  array4: {}[] = [];
  unit: String = 'day';

  constructor(
    private tmpService: TmpService
  ) { }

  ngOnInit() {
    this.humedad=false;
    this.radiacion=false;
    this.temperatura=true;

    this.tmpService.getAllTemperatura()
    .subscribe(temp => {
      this.temp = temp;
      
    })
    this.tmpService.getAllHumedad()
    .subscribe(hum => {
      this.hum = hum;
      
    })
    this.tmpService.getAllRadiacion()
    .subscribe(rad => {
      this.rad = rad;
      
    })
  }

  getDataTemp(){
    for(let data of this.temp) {
      console.log({x:moment(data.fecha_hora, "YYYY-MM-DD hh:mm:ss").toDate(),y:parseFloat(data.valor)});
      this.array2.push({x:moment(data.fecha_hora, "YYYY-MM-DD hh:mm:ss").toDate(),y:(parseFloat(data.valor))});
    }
    return this.array2;
  }

  getDataHum(){
    for(let data of this.hum) {
      console.log({x:moment(data.fecha_hora, "YYYY-MM-DD hh:mm:ss").toDate(),y:parseFloat(data.valor)});
      this.array3.push({x:moment(data.fecha_hora, "YYYY-MM-DD hh:mm:ss").toDate(),y:(parseFloat(data.valor))});
    }
    return this.array3;
  }

  getDataRad(){
    for(let data of this.rad) {
      console.log({x:moment(data.fecha_hora, "YYYY-MM-DD hh:mm:ss").toDate(),y:parseFloat(data.valor)});
      this.array4.push({x:moment(data.fecha_hora, "YYYY-MM-DD hh:mm:ss").toDate(),y:(parseFloat(data.valor))});
    }
    return this.array4;
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
        data: this.getDataHum(),
        backgroundColor: '#228B22',
        borderColor: '#228B22',
        borderWidth: 1,
        fill: false

      });
    }
    if(this.radiacion){
      this.array.push({
        label: 'Radiacion',
        data: this.getDataRad(),
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
        data: this.getDataTemp(),
        backgroundColor: '#ddee44',
        borderColor: '#ddee44',
        borderWidth: 1,
        fill: false

      });
    }

  }

  clickDay(event){
    this.unit='day';
    this.createLineChart();
  }

  clickMonth(event){
    this.unit='month';
    this.createLineChart();
  }

  clickWeek(event){
    this.unit='week';
    this.createLineChart();
  }

  clickYear(event){
    this.unit='year';
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
    this.clearcanvas();
    this.setdataset();

    this.line = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        datasets: this.array
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
                unit: this.unit
            }
          }],
          yAxes: [
            {
              id: 'y0',
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
