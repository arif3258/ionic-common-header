import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ios',
  templateUrl: './ios.page.html',
  styleUrls: ['./ios.page.scss'],
})
export class IosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onIphoneClick() {
    this.router.navigate(['ios/iphone']);
  }

}
