import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonHeaderComponent } from 'src/app/common-header/common-header.component';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pixel',
  templateUrl: './pixel.page.html',
  styleUrls: ['./pixel.page.scss'],
})
export class PixelPage implements OnInit {

  @ViewChild(CommonHeaderComponent, { static: false }) commonHeader: CommonHeaderComponent;

  constructor(private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() { }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.setUIBackButtonAction();
  }

  goBack() {
    this.router.navigate(['android']).then(async () => {
      const toast = await this.toastCtrl.create({
        header: 'Hey!',
        message: 'You have left the page',
        duration: 2000,
        position: 'bottom',
        buttons: [
          {
            text: 'Done',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      toast.present();
    });
  }

  setUIBackButtonAction() {
    console.log('back button registered');
    this.commonHeader.backButton.onClick = () => {
      this.goBack();
    };
  }
}
