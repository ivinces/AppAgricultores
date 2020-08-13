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

  constructor() { }

  ngOnInit() {
  }

  datasets: []

  


  ionViewDidEnter() {
    this.createLineDayChart();
  }

  createLineDayChart() {
    this.line = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Humedad',
          yAxesID: 'y0',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: '#ddee44',
          borderColor: '#ddee44',
          borderWidth: 1,
          fill: false

        },
        {
          label: 'Radiacion',
          data: [0.5, 0.8, 0.1, 0.9, 0.9, 0.5, 0.7, 0.12],
          backgroundColor: '#dd1144', 
          borderColor: '#dd1144',
          borderWidth: 1,
          fill: false,
          yAxisID: 'y1'
          
        }]
      },
      options: {
        scales: {
          yAxes: [
            {
              id: 'y',
              type: 'linear',
              position: 'left',
            }, {
              id: 'y1',
              type: 'linear',
              position: 'right',
              ticks: {
                max: 1,
                min: 0
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
          data: this.datasets,
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
          data: this.datasets,
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
          data: this.datasets,
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
