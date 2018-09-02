import {Component, ElementRef, ViewChild} from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {RequestPage} from "../request/request";
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-evaluate-host-page',
  templateUrl: 'evaluate-host.html'
})
export class EvaluateHostPage {


  stars = 0;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController) {
  }


  close() {
    this.navCtrl.popToRoot();
  }



}

