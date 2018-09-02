import {Component, ElementRef, ViewChild} from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {RequestCompletePage} from "../request-complete/request-complete";
import moment from "moment";

@Component({
  selector: 'page-request',
  templateUrl: 'request.html'
})
export class RequestPage {

  loc = {
    lat: -22.940140,
    lng: -43.178870,
    street: 'R. Clarice Índio do Brasil, 11',
    label: 'Você',
  };

  markers: marker[] = [
    {
      lat: -22.929420,
      lng: -43.171880,
    },
    {
      lat: -22.940140,
      lng: -43.178870,
    },
    {
      lat: -22.939800,
      lng: -43.180150,
    },
    {
      lat: -22.941590,
      lng: -43.181470,
    },
    {
      lat: -22.945900,
      lng: -43.184150,
    },
    {
      lat: -22.940240,
      lng: -43.176910,
    },
  ];

  form = {
    time: 60,
    gender: 'n/a',
    bath: false,
  };

  zoom: number = 14;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController) {
  }

  getTimeDiff() {
    return moment.duration(this.form.time, 'minutes').locale('pt').humanize();
    // return this.form.time < 60
    //   ? `${this.form.time} minutos`
    //     : this.form.time == 60
    //       ? `${this.form.time/60} hora`
    //     : (this.form.time) % 60 == 0
    //       ? `${this.form.time/60} horas`
    //       : `${Math.trunc(this.form.time/60)}:30 horas`;
  }

  solicitate() {
    const loading = this.loadingCtrl.create({duration: 500, content: 'Procurando...'});
    loading.present();
    loading.onDidDismiss(() => this.navCtrl.push(RequestCompletePage));
  }

  getPrice() {
    const prices = [
      { time: 20, price: 15 },
      { time: 40, price: 15 },
      { time: 60, price: 25 },
      { time: 2*60, price: 40 },
      { time: 4*60, price: 50 },
    ];
    const p = prices.filter(x => x.time == this.form.time);
    const additional = this.form.bath ? 5 : 0;
    if(p.length > 0) return p[0].price + additional;
    return 40 + additional;
  }

  styles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ];
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
