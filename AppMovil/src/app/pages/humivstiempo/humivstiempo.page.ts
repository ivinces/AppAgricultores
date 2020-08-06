import { Component, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import { Humedad } from 'src/app/interface/humedad';
import { TmpService } from '../../service/tmp.service';
import * as moment from 'moment';


@Component({
  selector: 'app-humivstiempo',
  templateUrl: './humivstiempo.page.html',
  styleUrls: ['./humivstiempo.page.scss'],
})
export class HumivstiempoPage implements OnInit {
  @ViewChild('barChart') barChart;
  public variable: string;
  line: any;
  colorArray: any;

  humd: Humedad[] = [];
  array: {}[] = [];

  constructor(
    private tmpService: TmpService
  ) { }

  ngOnInit() {
    this.tmpService.getAllHumedad()
    .subscribe(humd => {
      this.humd = humd;
      
    })
  }

  getData(){
    for(let data of this.humd) {
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
        //labels: this.arrayOfData,
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
        //labels: this.arrayOfDate,
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
