import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-variabletiempo',
  templateUrl: './variabletiempo.page.html',
  styleUrls: ['./variabletiempo.page.scss'],
})
export class VariabletiempoPage implements OnInit {
  public variable: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.variable= this.activatedRoute.snapshot.paramMap.get('id');
    
  }

}
