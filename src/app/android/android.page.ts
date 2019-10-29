import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-android',
  templateUrl: './android.page.html',
  styleUrls: ['./android.page.scss'],
})
export class AndroidPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onPixelClick() {
    this.router.navigate(['android/pixel']);
  }


}
