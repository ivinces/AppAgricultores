import { Component, OnInit, ViewChild, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-variabletiempo',
  templateUrl: './variabletiempo.page.html',
  styleUrls: ['./variabletiempo.page.scss'],
})
export class VariabletiempoPage implements OnInit {
  @ViewChild('barChart') barChart;
  @ViewChild('icono') icono;
  public variable: string;
  line: any;
  colorArray: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.variable= this.activatedRoute.snapshot.paramMap.get('id');
  }
  ionViewDidEnter() {
    this.createLineDayChart();
  }


  createLineDayChart() {
    this.line = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Valores en el día',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          //backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          backgroundColor: 'rgb(0,0,0,0)',
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
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
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Valores en la Semana',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          //backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          backgroundColor: 'rgb(0,0,0,0)',
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
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
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Valores del Mes',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          //backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          backgroundColor: 'rgb(0,0,0,0)',
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
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
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Valores del Año',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          //backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          backgroundColor: 'rgb(0,0,0,0)',
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
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
