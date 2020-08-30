import { Component, OnInit } from '@angular/core';
import { TmpService } from 'src/app/service/tmp.service';

@Component({
  selector: 'app-mapatab',
  templateUrl: './mapatab.page.html',
  styleUrls: ['./mapatab.page.scss'],
})
export class MapatabPage implements OnInit {

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
