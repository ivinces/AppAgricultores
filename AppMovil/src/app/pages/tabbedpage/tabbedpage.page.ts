import { Component, OnInit } from '@angular/core';
import { TmpService } from 'src/app/service/tmp.service';

@Component({
  selector: 'app-tabbedpage',
  templateUrl: './tabbedpage.page.html',
  styleUrls: ['./tabbedpage.page.scss'],
})
export class TabbedpagePage implements OnInit {

  cultivo_actual:string;
  cult_nombre:string;

  constructor(
    private tmpService: TmpService
  ) { }

  ngOnInit() {
    
    this.cultivo_actual=this.tmpService.cultivo_actual;
    console.log(this.cultivo_actual);

    this.tmpService.getCultivoById(this.cultivo_actual).subscribe(c => {
      this.cult_nombre=c[0].nombre;
      console.log(c[0]);
    });
  }

}
