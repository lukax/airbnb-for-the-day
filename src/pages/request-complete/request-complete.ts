import {Component, ElementRef, ViewChild} from '@angular/core';
import {LoadingController, MenuController, NavController, ToastController} from 'ionic-angular';
import {RequestPage} from "../request/request";
import { Content } from 'ionic-angular';
import {EvaluateHostPage} from "../evaluate-host/evaluate-host";
import {GuestCheckinPage} from "../guest-checkin/guest-checkin";

@Component({
  selector: 'page-request-complete',
  templateUrl: 'request-complete.html'
})
export class RequestCompletePage {

  loc = {
    lat: -22.940140,
    lng: -43.178870,
    street: 'R. Clarice Índio do Brasil, 11',
    label: 'Você',
  };

  markers: marker[] = [
    {
      lat: -22.939800,
      lng: -43.180150,
      street: 'R. Clarice Índio do Brasil, 45 - Botafogo',
      label: 'Quarto da Thais',
    },
    this.loc,
  ];


  room = {
      title: 'Quarto da Thais',
      picture: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/19/38/193846966.jpeg',
      description: 'R. Clarice Índio do Brasil, 45 - Botafogo',
      stars: 4.2,
      reviewsCount: 8,
      additionals: ['Cafézinho', 'Banho'],
      distance: '2 mins',
    };

  form = {
    time: 30,
    gender: 'n/a',
  };

  @ViewChild('pageTop') pageTop: Content;
  toast;

  // google maps zoom level
  zoom: number = 16;
  isConfirmed = false;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
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
    loading.onDidDismiss(() => {
      this.isConfirmed = true;
      this.pageTop.scrollToTop();
      this.zoom = 17;
      //this.navCtrl.pop()

      const msg = 'Dirija-se até o local indicado no mapa';
      this.toast = this.toastCtrl.create({message: msg, position: 'top', cssClass: 'toaster', });
      this.toast.present();
    });
  }

  doCheckIn() {
    this.toast.dismiss().then(() => {
      this.navCtrl.push(GuestCheckinPage);
    }) ;

  }

  leg = {
      "distance": {
        "text": "0.1 km",
        "value": 145
      },
      "duration": {
        "text": "2 mins",
        "value": 116
      },
      "end_address": "R. Clarice Índio do Brasil, 45 - Botafogo, Rio de Janeiro - RJ, 22230-090, Brazil",
      "end_location": {
        "lat": -22.9397357,
        "lng": -43.1801319
      },
      "start_address": "R. Clarice Índio do Brasil, 3 - Botafogo, Rio de Janeiro - RJ, 22230-090, Brazil",
      "start_location": {
        "lat": -22.940062,
        "lng": -43.1788462
      },
      "steps": [
        {
          "distance": {
            "text": "0.1 km",
            "value": 145
          },
          "duration": {
            "text": "2 mins",
            "value": 116
          },
          "end_location": {
            "lat": -22.9397357,
            "lng": -43.1801319
          },
          "html_instructions": "Walk to R. Clarice Índio do Brasil, 45 - Botafogo, Rio de Janeiro - RJ, 22230-090, Brazil",
          "polyline": {
            "points": "jn_kCxjpfGCLIh@Kh@EJC?A?A??@A??@?@?@?@@??@@?@?@NCNEPGXKx@"
          },
          "start_location": {
            "lat": -22.940062,
            "lng": -43.1788462
          },
          "steps": [
            {
              "distance": {
                "text": "0.1 km",
                "value": 145
              },
              "duration": {
                "text": "2 mins",
                "value": 116
              },
              "end_location": {
                "lat": -22.9397357,
                "lng": -43.1801319
              },
              "html_instructions": "Head <b>west</b> on <b>R. Clarice Índio do Brasil</b> toward <b>R. Paulo VI</b><div style=\"font-size:0.9em\">Go through 1 roundabout</div><div style=\"font-size:0.9em\">Destination will be on the left</div>",
              "polyline": {
                "points": "jn_kCxjpfGCLIh@Kh@EJC?A?A??@A??@?@?@?@@??@@?@?@NCNEPGXKx@"
              },
              "start_location": {
                "lat": -22.940062,
                "lng": -43.1788462
              },
              "travel_mode": "WALKING"
            }
          ],
          "travel_mode": "WALKING"
        }
      ],
      "traffic_speed_entry": [],
      "via_waypoint": []
    };

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
