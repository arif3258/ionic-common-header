import { NgModule } from '@angular/core';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [IonicModule, CommonModule],
    declarations: [CommonHeaderComponent],
    exports: [CommonHeaderComponent]
})
export class CommonComponentModule { }
