import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-pagetabs',
  templateUrl: './pagetabs.page.html',
  styleUrls: ['./pagetabs.page.scss'],
})
export class PagetabsPage implements OnInit {
  selectedPath = 'pagetabs/tab1';

  constructor(private router:Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      if(event && event.url){
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
