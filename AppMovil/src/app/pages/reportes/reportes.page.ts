import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Registros } from '../../interface/registros';
import { TmpService } from '../../service/tmp.service';

import * as moment from 'moment';
import { CultivoxNodoxReg } from 'src/app/interface/cultivoxnodoxreg';
import * as ChartAnnotation from 'chartjs-plugin-annotation';

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
  buttonColortemp: string = '#4f9a94';
  buttonColoryear: string = '#4f9a94';
  buttonColormonth: string = '#4f9a94';
  buttonColorday: string = '#345465';
  buttonColorweek: string = '#4f9a94';

  humedad:boolean;
  radiacion:boolean;
  temperatura:boolean;

  annotations: {}[]=[];

  datasets: any;
  array: {}[];
  
  arraytemp: {}[]=[];
  arrayhum: {}[]=[];
  arrayrad: {}[]=[];
  arrayregistros: {}[];
  unit: String = 'day';
  cultivo_actual: string;
  m_cultivo: CultivoxNodoxReg[] = [];

  constructor(
    private tmpService: TmpService
  ) { }

  ngOnInit() {
    this.humedad=false;
    this.radiacion=false;
    this.temperatura=false;
    this.cultivo_actual=this.tmpService.cultivo_actual;

    let namedChartAnnotation = ChartAnnotation;
    namedChartAnnotation["id"]="annotation";
    Chart.pluginService.register( namedChartAnnotation);
    
    this.tmpService.getCultivoxNodoxRegById(this.cultivo_actual).subscribe(reg => {
      this.m_cultivo=reg;
    })
  }

  getAnotations(){
    this.tmpService.getCultivoxUmbralesById(this.cultivo_actual).subscribe( umbr => {
      var tam=umbr.length-1;
      this.annotations=[];
      if(this.temperatura){
        this.annotations.push({
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y0',
          value: umbr[tam].temp_min,
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 4,
          label: {
            enabled: true,
            content: 'Temperatura Min'
          },
        });
        this.annotations.push({
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y0',
          value: umbr[tam].temp_max,
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 4,
          label: {
            enabled: true,
            content: 'Temperatura Max'
          },
        });
      }
      if(this.radiacion){
        this.annotations.push({
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y1',
          value: umbr[tam].radiacion_uv_min,
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 4,
          label: {
            enabled: true,
            content: 'Radiación Min'
          },
        });
        this.annotations.push({
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y1',
          value: umbr[tam].radiacion_uv_max,
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 4,
          label: {
            enabled: true,
            content: 'Radiación Max'
          },
        });
      }
      if(this.humedad){
        this.annotations.push({
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y0',
          value: umbr[tam].humedad_min,
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 4,
          label: {
            enabled: true,
            content: 'Humedad Min'
          },
        });
        this.annotations.push({
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y0',
          value: umbr[tam].humedad_max,
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 4,
          label: {
            enabled: true,
            content: 'Humedad Max'
          },
        });
      }
    });
  }

  getData(){
    this.array = [];
    this.arraytemp = [];
    this.arrayhum = [];
    this.arrayrad = [];
    this.arrayregistros = [];

    for(let reg of this.m_cultivo){
      var year=new Date().getFullYear();
      var month=new Date().getMonth();
      var day=new Date().getUTCDate()-1;
      var week=(new Date().getUTCDate())-(new Date().getUTCDay());
      var reg_date=new Date(moment(reg.fecha_hora, "YYYY-MM-DD hh:mm:ss").toDate());
      
      //console.log(reg_date);
      
      //console.log(this.unit);

      if(this.unit=='day'){
        console.log(new Date(year,month,day));
        console.log(day,"entro dia");
        if(new Date(reg_date)>=new Date(year,month,day)){
          console.log(new Date(year,month,day));
          this.arrayhum.push({x:reg_date,y:reg.humedad});
          this.arrayrad.push({x:reg_date,y:reg.radiacion});
          this.arraytemp.push({x:reg_date,y:reg.temperatura});
          this.arrayregistros.push({w:reg_date,x:reg.temperatura,y:reg.humedad,z:reg.radiacion});
          console.log("entro dia");
        }
      }
      else if(this.unit=='week'){
        
        if(new Date(reg_date)>=new Date(year,month,week)){
          this.arraytemp.push({x:reg_date,y:reg.temperatura});
          this.arrayhum.push({x:reg_date,y:reg.humedad});
          this.arrayrad.push({x:reg_date,y:reg.radiacion});
          this.arrayregistros.push({w:reg_date,x:reg.temperatura,y:reg.humedad,z:reg.radiacion});
          console.log("entro week");
        }
      }
      if(this.unit=='month'){
        if(new Date(reg_date).getMonth()==month){
          console.log(reg_date);
          this.arrayhum.push({x:reg_date,y:reg.humedad});
          this.arrayrad.push({x:reg_date,y:reg.radiacion});
          this.arraytemp.push({x:reg_date,y:reg.temperatura});
          this.arrayregistros.push({w:reg_date,x:reg.temperatura,y:reg.humedad,z:reg.radiacion});
          //console.log("entro month");
        }
      }
      if(this.unit=='year'){
        if(new Date(reg_date).getFullYear()==year){
          this.arraytemp.push({x:reg_date,y:reg.temperatura});
          this.arrayhum.push({x:reg_date,y:reg.humedad});
          this.arrayrad.push({x:reg_date,y:reg.radiacion});
          this.arrayregistros.push({w:reg_date,x:reg.temperatura,y:reg.humedad,z:reg.radiacion});
          //console.log("entro year");
        }
      }   
    }
  }

  compare(a, b) {
    const fechaA = a.x;
    const fechaB = b.x;
    let comparison = 0;
    if (fechaA > fechaB) {
      comparison = 1;
    } else if (fechaA < fechaB) {
      comparison = -1;
    }
    return comparison;
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
        data: this.arrayhum.sort(this.compare),
        backgroundColor: '#0000FF',
        borderColor: '#0000FF',
        borderWidth: 1,
        fill: false

      });
    }
    if(this.radiacion){
      this.array.push({
        label: 'Radiacion',
        data: this.arrayrad.sort(this.compare),
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
        data: this.arraytemp.sort(this.compare),
        backgroundColor: '#FF0000',
        borderColor: '#FF0000',
        borderWidth: 1,
        fill: false

      });
    }

  }

  clickDay(event){
    this.unit='day';
    this.getData();
    this.createLineChart();
    this.buttonColorday='#345465';
    this.buttonColormonth='#4f9a94';
    this.buttonColorweek='#4f9a94';
    this.buttonColoryear='#4f9a94';
  }

  clickMonth(event){
    this.unit='month';
    this.getData();
    this.createLineChart();
    this.buttonColorday='#4f9a94';
    this.buttonColormonth='#345465';
    this.buttonColorweek='#4f9a94';
    this.buttonColoryear='#4f9a94';
  }

  clickWeek(event){
    this.unit='week';
    this.getData();
    this.createLineChart();
    this.buttonColorday='#4f9a94';
    this.buttonColormonth='#4f9a94';
    this.buttonColorweek='#345465';
    this.buttonColoryear='#4f9a94';
  }

  clickYear(event){
    this.unit='year';
    this.getData();
    this.createLineChart();
    this.buttonColorday='#4f9a94';
    this.buttonColormonth='#4f9a94';
    this.buttonColorweek='#4f9a94';
    this.buttonColoryear='#345465';
    
  }

  clickTemp(event){
    this.temperatura=!this.temperatura;
    this.getData();
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
    this.getData();
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
    this.getData();
    this.createLineChart();
    if(this.humedad){
      this.buttonColorhum = '#345465'
    }
    else{
      this.buttonColorhum = '#4f9a94'
    }
  }

  clearcanvas(){
    if(this.line){
      this.line.destroy();
    }
  }

  createLineChart(){
    this.clearcanvas();
    this.setdataset();
    this.getAnotations();

    this.line = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        datasets: this.array
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time'
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
        },
        annotation: {
          annotations: this.annotations
        }
      }
    });
  }

}
