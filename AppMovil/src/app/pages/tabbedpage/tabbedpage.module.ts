import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabbedpagePageRoutingModule } from './tabbedpage-routing.module';

import { TabbedpagePage } from './tabbedpage.page';
import { Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabbedpagePageRoutingModule
  ],
  declarations: [TabbedpagePage]
})
export class TabbedpagePageModule {}
