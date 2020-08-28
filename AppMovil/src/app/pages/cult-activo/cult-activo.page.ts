import { Component, OnInit } from '@angular/core';
import { TmpService } from 'src/app/service/tmp.service';
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cult-activo',
  templateUrl: './cult-activo.page.html',
  styleUrls: ['./cult-activo.page.scss'],
})
export class CultActivoPage implements OnInit {

  cultivo2: {}[];

  constructor(
    private tmpService: TmpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.initializeItems()
  }

  ngOnInit() {
  }
  initializeItems(){
    this.cultivo2=[];
    this.tmpService.getAllCultivo().subscribe(cult => {
      for(let c of cult){
        if(c.activo){
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
    console.log(this.tmpService.cultivo_actual);
    //this.router.navigateByUrl("/inicio");
    this.router.navigate(['/inicio']);
  }

}
