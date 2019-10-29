import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonBackButtonDelegate } from '@ionic/angular';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {
  @Input() pageTitle = 'home';
  @ViewChild(IonBackButtonDelegate, { static: false }) backButton: IonBackButtonDelegate;

  constructor() { }

  ngOnInit() { }

}
