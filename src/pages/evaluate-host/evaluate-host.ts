import {Component, ElementRef, ViewChild} from '@angular/core';
import {LoadingController, MenuController, NavController} from 'ionic-angular';
import {RequestPage} from "../request/request";
import { Content } from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-evaluate-host-page',
  templateUrl: 'evaluate-host.html'
})
export class EvaluateHostPage {


  stars = 0;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public menuCtrl: MenuController) {
  this.menuCtrl.enable(false);
  }


  close() {
    this.navCtrl.setRoot(LoginPage);
  }



}

