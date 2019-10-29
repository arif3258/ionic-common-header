import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IosPage } from './ios.page';
import { CommonComponentModule } from '../common-component.module';

const routes: Routes = [
  {
    path: '',
    component: IosPage
  },
  {
    path: 'iphone',
    loadChildren: './iphone/iphone.module#IphonePageModule'
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
  declarations: [IosPage]
})
export class IosPageModule { }
