import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PixelPage } from './pixel.page';
import { CommonComponentModule } from '../../common-component.module';

const routes: Routes = [
  {
    path: '',
    component: PixelPage
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
  declarations: [PixelPage]
})
export class PixelPageModule { }
