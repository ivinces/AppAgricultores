import { Component, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import { Temperatura } from '../../interface/temperatura'
import { TmpService } from '../../service/tmp.service'
import * as moment from 'moment';
import { Sensor } from 'src/app/interface/sensor';
import { Cultivo } from 'src/app/interface/cultivo';

@Component({
  selector: 'app-tempvstiempo',
  templateUrl: './tempvstiempo.page.html',
  styleUrls: ['./tempvstiempo.page.scss'],
})
export class TempvstiempoPage implements OnInit {
  @ViewChild('barChart') barChart;
  @ViewChild('icono') icono;
  public variable: string;
  line: any;
  colorArray: any;


  temp: Temperatura[] = [];
  array: {}[] = [];
  cultivo: Cultivo[] = [];
  sensor: Sensor[] = [];
  id_sensor : string;
  nombre_cultivo : string;
  id_cultivo : string;
  indice = 0;

  constructor(
    private tmpService: TmpService
  ) { }

  ngOnInit() {
    this.tmpService.getAllCultivo()
    .subscribe(cultivo => {
      this.cultivo = cultivo;
      this.nombre_cultivo=cultivo[this.indice].nombre;
      this.id_cultivo=cultivo[this.indice].id_cultivo;
    })

    this.tmpService.getAllSensor()
    .subscribe(sensor => {
      for(let data of sensor) {
        if(data.id_cultivo==this.id_cultivo){
          this.sensor.push(data);
        }
      }
    })

    this.tmpService.getAllTemperatura()
    .subscribe(temp => {
      for(let data of temp) {
        for(let data1 of this.sensor) {
          if(data.id_sensor==data1.id_sensor){
            this.temp.push(data);
          }
        }
      }
    })
  }

  getData(){
    for(let data of this.temp) {
      console.log({x:moment(data.fecha_hora, "YYYY-MM-DD hh:mm:ss").toDate(),y:parseFloat(data.valor)});
      this.array.push({x:moment(data.fecha_hora, "YYYY-MM-DD hh:mm:ss").toDate(),y:(parseFloat(data.valor))});
    }
    return this.array;
  }

  ionViewDidEnter() {
    this.createLineDayChart();
  }


  createLineDayChart() {
    this.line = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        //labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Valores en el día',
          data: this.getData(),
          //backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          backgroundColor: 'rgb(0,0,0,0)',
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
                unit: 'day'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  clickDia(event) {
    this.createLineDayChart();
  }

  clickSemana(event) {
    this.line = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        //labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Valores en la Semana',
          data: this.getData(),
          //backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          backgroundColor: 'rgb(0,0,0,0)',
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
                unit: 'week'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  clickMes(event) {
    this.line = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        //labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Valores del Mes',
          data: this.getData(),
          //backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          backgroundColor: 'rgb(0,0,0,0)',
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
                unit: 'month'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  clickYear(event) {
    this.line = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        //labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Valores del Año',
          data: this.getData(),
          //backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          backgroundColor: 'rgb(0,0,0,0)',
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
                unit: 'year'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }



}
