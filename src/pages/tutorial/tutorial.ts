import {Component, ElementRef, ViewChild} from '@angular/core';
import {LoadingController, NavController, ToastController} from 'ionic-angular';
import {RequestPage} from "../request/request";
import { Content } from 'ionic-angular';
import {EvaluateHostPage} from "../evaluate-host/evaluate-host";
import {GuestCheckinPage} from "../guest-checkin/guest-checkin";
import {Http} from "@angular/http";

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  email: string;
  phone: string;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public http: Http) {
  }

  send() {

    const loading = this.loadingCtrl.create({ content: 'Aguarde...'});
    loading.present();

    const data = new FormData();
    data.append("email", this.email);
    data.append("numcelular", this.phone);
    data.append("tamcupon", '6');

    this.http.post('http://napptime.me/interessado.php', data)
      .subscribe(
        () => {
          loading.dismiss().then(() => {
            this.navCtrl.popToRoot();
          });
      },(err) => {
          loading.dismiss().then(() => {
            this.navCtrl.popToRoot();
          });
          console.log(`err ${err}`);
        }
      );
  }

}

