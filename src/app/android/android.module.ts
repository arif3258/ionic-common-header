import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AndroidPage } from './android.page';
import { CommonComponentModule } from '../common-component.module';

const routes: Routes = [
  {
    path: '',
    component: AndroidPage
  },
  {
    path: 'pixel',
    loadChildren: './pixel/pixel.module#PixelPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    CommonComponentModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AndroidPage]
})
export class AndroidPageModule { }
