import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Registros } from '../../interface/registros';
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

  buttonColorrad: string = '#4f9a94';
  buttonColorhum: string = '#4f9a94';
  buttonColortemp: string = '#345465';
  buttonColoryear: string = '#4f9a94';
  buttonColormonth: string = '#4f9a94';
  buttonColorday: string = '#345465';
  buttonColorweek: string = '#4f9a94';

  humedad:boolean;
  radiacion:boolean;
  temperatura:boolean;

  datasets: any;
  array: {}[] = [];

  registros: Registros[] = [];
  arrayreg: {}[] = [];
  arraytemp: {}[] = [];
  arrayhum: {}[] = [];
  arrayrad: {}[] = [];
  unit: String = 'day';

  constructor(
    private tmpService: TmpService
  ) { }

  ngOnInit() {
    this.humedad=false;
    this.radiacion=false;
    this.temperatura=true;
  }

  getData(){
    this.registros=this.tmpService.MatchRegistros();
    for(let reg of this.registros){
      var year=new Date().getFullYear();
      var month=new Date().getMonth();
      var day=new Date().getUTCDate();
      var week=(new Date().getUTCDate())-(new Date().getUTCDay());
      var reg_date=moment(reg.fecha_hora, "YYYY-MM-DD hh:mm:ss").toDate();
      if(this.unit=='day'){
        if(new Date(reg_date)>=new Date(year,month,day)){
          this.arraytemp.push({x:reg_date,y:reg.temperatura});
          this.arrayhum.push({x:reg_date,y:reg.humedad});
          this.arrayrad.push({x:reg_date,y:reg.radiacion});
          this.arrayreg.push({w:reg_date,x:reg.temperatura,y:reg.humedad,z:reg.radiacion});
        }
      }
      else if(this.unit=='week'){
        if(new Date(reg_date)>=new Date(year,month,week)){
          this.arraytemp.push({x:reg_date,y:reg.temperatura});
          this.arrayhum.push({x:reg_date,y:reg.humedad});
          this.arrayrad.push({x:reg_date,y:reg.radiacion});
          this.arrayreg.push({w:reg_date,x:reg.temperatura,y:reg.humedad,z:reg.radiacion});
        }
      }
      if(this.unit=='month'){
        if(new Date(reg_date).getMonth()==month){
          this.arraytemp.push({x:reg_date,y:reg.temperatura});
          this.arrayhum.push({x:reg_date,y:reg.humedad});
          this.arrayrad.push({x:reg_date,y:reg.radiacion});
          this.arrayreg.push({w:reg_date,x:reg.temperatura,y:reg.humedad,z:reg.radiacion});
        }
      }
      if(this.unit=='year'){
        if(new Date(reg_date).getFullYear()==year){
          this.arraytemp.push({x:reg_date,y:reg.temperatura});
          this.arrayhum.push({x:reg_date,y:reg.humedad});
          this.arrayrad.push({x:reg_date,y:reg.radiacion});
          this.arrayreg.push({w:reg_date,x:reg.temperatura,y:reg.humedad,z:reg.radiacion});
        }
      }

    }
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
        data: this.arrayhum,
        backgroundColor: '#0000FF',
        borderColor: '#0000FF',
        borderWidth: 1,
        fill: false

      });
    }
    if(this.radiacion){
      this.array.push({
        label: 'Radiacion',
        data: this.arrayrad,
        backgroundColor: '#ddee44', 
        borderColor: '#ddee44',
        borderWidth: 1,
        fill: false,
        yAxisID: 'y1'
        
      });
    }

    if(this.temperatura){
      this.array.push({
        label: 'Temperatura',
        yAxesID: 'y0',
        data: this.arraytemp,
        backgroundColor: '#FF0000',
        borderColor: '#FF0000',
        borderWidth: 1,
        fill: false

      });
    }

  }

  clickDay(event){
    this.unit='day';
    this.createLineChart();
    this.buttonColorday='#345465';
    this.buttonColormonth='#4f9a94';
    this.buttonColorweek='#4f9a94';
    this.buttonColoryear='#4f9a94';
  }

  clickMonth(event){
    this.unit='month';
    this.createLineChart();
    this.buttonColorday='#4f9a94';
    this.buttonColormonth='#345465';
    this.buttonColorweek='#4f9a94';
    this.buttonColoryear='#4f9a94';
  }

  clickWeek(event){
    this.unit='week';
    this.createLineChart();
    this.buttonColorday='#4f9a94';
    this.buttonColormonth='#4f9a94';
    this.buttonColorweek='#345465';
    this.buttonColoryear='#4f9a94';
  }

  clickYear(event){
    this.unit='year';
    this.createLineChart();
    this.buttonColorday='#4f9a94';
    this.buttonColormonth='#4f9a94';
    this.buttonColorweek='#4f9a94';
    this.buttonColoryear='#345465';
    
  }

  clickTemp(event){
    this.temperatura=!this.temperatura;
    this.createLineChart();
    if(this.temperatura){
      this.buttonColortemp = '#345465'
    }
    else{
      this.buttonColortemp = '#4f9a94'
    }
  }

  clickRad(event){
    this.radiacion=!this.radiacion;
    this.createLineChart();
    if(this.radiacion){
      this.buttonColorrad = '#345465'
    }
    else{
      this.buttonColorrad = '#4f9a94'
    }
  }

  clickHumidity(event){
    this.humedad=!this.humedad;
    this.createLineChart();
    if(this.humedad){
      this.buttonColorhum = '#345465'
    }
    else{
      this.buttonColorhum = '#4f9a94'
    }
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
