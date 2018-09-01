import {Component, ElementRef, ViewChild} from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {RequestPage} from "../request/request";

@Component({
  selector: 'page-request-complete',
  templateUrl: 'request-complete.html'
})
export class RequestCompletePage {

  markers: marker[] = [
    {
      region: 'Centro',
      lat: -22.904704,
      lng: -43.176397,
      street: 'Rua da Quitanda, 21',
      label: 'SABOR SAÚDE (só recebe)',
    },
    {
      region: 'Centro',
      lat: -22.904948,
      lng: -43.176063,
      street: 'Rua da Quitanda, 17',
      label: 'T.T. BURGUER (só recebe)',
    }
  ];

  room = {
      title: 'Atlântico Copacabana',
      picture: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/20/60/206016446.jpeg',
      description: 'Rio de Janeiro, 0.4 miles away from the beach',
      stars: 3.8,
      reviewsCount: 8,
      additionals: ['Tem cafézinho'],
      distance: '15 min',
    };

  form = {
    time: 30,
    gender: 'n/a',
  };

  // google maps zoom level
  zoom: number = 12;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController) {
  }


  getTimeDiff() {
    return this.form.time < 60
      ? `${this.form.time} minutos`
        : this.form.time == 60
          ? `${this.form.time/60} hora`
        : (this.form.time) % 60 == 0
          ? `${this.form.time/60} horas`
          : `${Math.trunc(this.form.time/60)}:30 horas`;
  }

  confirm() {
    const loading = this.loadingCtrl.create({duration: 500, content: 'Confirmando...'});
    loading.present();
    loading.onDidDismiss(() => this.navCtrl.pop());
  }

}


interface marker {
  lat: number;
  lng: number;
  label?: string;
  street?: string;
  region?: string;
  phone?: string;
  info?: string;
}
