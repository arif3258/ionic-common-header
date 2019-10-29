import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IphonePage } from './iphone.page';
import { CommonComponentModule } from '../../common-component.module';

const routes: Routes = [
  {
    path: '',
    component: IphonePage
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
  declarations: [IphonePage]
})
export class IphonePageModule { }
