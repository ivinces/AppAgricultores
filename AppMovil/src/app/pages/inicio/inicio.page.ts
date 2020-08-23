import { Component, OnInit } from '@angular/core';
import { TmpService } from '../../service/tmp.service';
import { Registros } from 'src/app/interface/registros';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  registros : Registros;

  constructor(
    private tmpService: TmpService
  ) {}

  ngOnInit() {
    this.registros= this.tmpService.MatchRegistros().reverse()[0];
  }
}
