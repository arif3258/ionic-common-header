import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CommonHeaderComponent } from 'src/app/common-header/common-header.component';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.page.html',
  styleUrls: ['./iphone.page.scss'],
})
export class IphonePage implements OnInit {
  constructor(
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  @ViewChild(CommonHeaderComponent, { static: false }) commonHeader: CommonHeaderComponent;

  ngOnInit() {

  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.setUIBackButtonAction();
  }

  async goBack() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      subHeader:
        'All unsaved progress will be discarded. Are you sure you want to leave the page?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'Yes',
          handler: () => {
            this.router.navigateByUrl('/ios');
          }
        }
      ]
    });
    await alert.present();
  }

  setUIBackButtonAction() {
    console.log('back button registered');
    this.commonHeader.backButton.onClick = () => {
      this.goBack();
    };
  }
}
