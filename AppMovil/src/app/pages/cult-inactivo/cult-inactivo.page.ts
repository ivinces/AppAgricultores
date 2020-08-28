import { Component, OnInit } from '@angular/core';
import { TmpService } from 'src/app/service/tmp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cult-inactivo',
  templateUrl: './cult-inactivo.page.html',
  styleUrls: ['./cult-inactivo.page.scss'],
})
export class CultInactivoPage implements OnInit {

  cultivo2: {}[];

  constructor(
    private tmpService: TmpService,
    private router: Router
  ) { 
    this.initializeItems()
  }

  ngOnInit() {
  }
  initializeItems(){
    this.cultivo2=[];
    this.tmpService.getAllCultivo().subscribe(cult => {
      for(let c of cult){
        if(!c.activo){
          this.cultivo2.push({id:c.id_cultivo,nombre:c.nombre});
        }
      }
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    
    // set val to the value of the searchbar
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.cultivo2 = this.cultivo2.filter((item) => {
        return (item['nombre'].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
      this.initializeItems();
    }

    // if the value is an empty string don't filter the items
    
  }

  cambiarCultivo(event){
    var id =event.target.value;
    this.tmpService.cultivo_actual=id;
    this.tmpService.setCultivoActual(id);
    this.router.navigate(['/inicio']);
  }
}