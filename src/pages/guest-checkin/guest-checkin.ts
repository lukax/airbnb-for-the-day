import {Component, ElementRef, ViewChild} from '@angular/core';
import {LoadingController, MenuController, NavController} from 'ionic-angular';
import {RequestPage} from "../request/request";
import { Content } from 'ionic-angular';
import {EvaluateHostPage} from "../evaluate-host/evaluate-host";

@Component({
  selector: 'page-guest-checkin',
  templateUrl: 'guest-checkin.html'
})
export class GuestCheckinPage {

  stars = 0;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }


  close() {
    this.navCtrl.popToRoot();
  }

  readQrCode() {
    this.navCtrl.push(EvaluateHostPage);
  }

}

