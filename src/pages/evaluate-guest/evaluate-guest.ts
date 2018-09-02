import {Component, ElementRef, ViewChild} from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {RequestPage} from "../request/request";
import { Content } from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-evaluate-guest-page',
  templateUrl: 'evaluate-guest.html'
})
export class EvaluateGuestPage {


  stars = 0;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController) {
  }


  close() {
    this.navCtrl.popToRoot().then(() => this.navCtrl.setRoot(LoginPage));
  }



}

