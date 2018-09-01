import {Component, ElementRef, ViewChild} from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {RequestCompletePage} from "../request-complete/request-complete";

@Component({
  selector: 'page-request',
  templateUrl: 'request.html'
})
export class RequestPage {

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
    },
    {
      region: 'Zona Sul',
      lat: -22.932364,
      lng: -43.182187,
      street: 'Rua Gago Coutinho, 14 – Laranjeiras',
      label: 'Colégio EDEM (só recebe)',
      phone: '21 3235-8080',
    },
    {
      region: 'Zona Sul',
      lat: -22.984276,
      lng: -43.219899,
      street: 'Rua Carlos Góis 208, Leblon',
      label: 'Loja Ahlma (só recebe)',
      phone: '21 3449-9167',
    },
    {
      region: 'Zona Sul',
      lat: -22.978699,
      lng: -43.227839,
      street: 'Avenida Padre Leonel França S/N, Gávea',
      label: 'Galpão das Artes da Comlurb (só recebe)',
    },
    {
      region: 'Zona Sul',
      lat: -22.976454,
      lng: -43.219032,
      street: 'Avenida Borges De Medeiros 997, Lagoa',
      label: 'Clube de Regatas Flamengo (só recebe)',
    },
    {
      region: 'Zona Sul',
      lat: -22.983660,
      lng: -43.215475,
      street: 'Av. Ataulfo De Paiva, 270, 2º Andar – Leblon',
      label: 'Shopping Rio Design Leblon (só recebe)'
    },
    {
      region: 'Zona Sul',
      label: 'T.T. Burguer (só recebe)',
      street: 'Av. Ataulfo de Paiva, 1240 –  Leblon',
      lat: -22.985957,
      lng: -43.227373,
    },
    {
      region: 'Zona Sul',
      label: 'Galeria Info Zona Sul (só recebe)',
      street: 'Rua Voluntários da Pátria, nº 261 Box 29 – Botafogo',
      info: 'De 9h às 19h – segunda à sexta\n 9h às 14h – sábado',
      lat: -22.950692,
      lng: -43.182294,
    },
    {
      region: 'Zona Sul',
      label: 'NEX COWORKING (só recebe)',
      street: 'Ladeira da Glória, 26. Bloco 3 (Glória)',
      lat: -22.921260,
      lng: -43.175555,
    },
    {
      region: 'Zona Sul',
      label: 'REDE ENTROPIA (só recebe)',
      street: 'Rua das Acácias, 19 (Gávea)',
      lat: -22.974770,
      lng: -43.229833,
    },
    {
      region: 'Zona Sul',
      label: 'LOJA RESERVA (só recebe)',
      street: 'Shopping Fashion Mall (São Conrado)',
      lat: -22.996670,
      lng: -43.269720,
    },
    {
      region: 'Zona Sul',
      label: 'LOJA RIO2LOVE (só recebe)',
      street: 'Rua Visconde de Pirajá, 82 – 104 (Ipanema)',
      lat: -22.984673,
      lng: -43.197013,
    },
    {
      region: 'Nova Iguaçu',
      label: 'Shopping Nova Iguaçu (só recebe)',
      street: 'Av. Abílio Augusto Távora, 1111',
      lat: -22.763641,
      lng: -43.465259,
    },
    {
      region: 'Nova Iguaçu',
      label: 'E-lixo RJ (recebe e coleta)',
      street: 'Rua Isidro Rocha, 70 – Vigário Geral',
      info: 'contato@e-lixo-rj.com.br\n' + '(21) 3474-2901 | (21) 98390-0666\n',
      lat: -22.812245,
      lng: -43.312027,
    },
    {
      region: 'Zona Oeste',
      label: 'Campo de Golfe Olímpico (só recebe)',
      street: 'Avenida General Moisés Castelo Branco Filho 700 – Barra',
      lat: -23.003544,
      lng: -43.400078,
    },
    {
      region: 'Zona Oeste',
      label: 'Condomínio Sublime (só recebe)',
      street: 'Estrada Benvindo de Novaes 2800 – Recreio',
      lat: -23.013670,
      lng: -43.463322,
    },
    {
      region: 'Zona Oeste',
      label: 'IJOKER no Shopping BaySide (só recebe)',
      street: 'Av. das Américas, 3120, loja 213 –  Barra da Tijuca',
      lat: -22.999548,
      lng: -43.378749,
    },
    {
      region: 'Zona Oeste',
      label: 'Shopping Rio Design Barra (só recebe)',
      street: 'Av. das Américas, 7777 – Barra da Tijuca',
      lat: -23.006144,
      lng: -43.432497,
    },
    {
      region: 'Zona Oeste',
      label: 'ASSOCIAÇÃO BOSQUE MARAPENDI (só recebe)',
      street: 'Av. Pref. Dulcídio Cardoso, 1250 (Barra da Tijuca)',
      lat: -23.004233,
      lng: -43.367101,
    },
    {
      region: 'Zona Norte',
      label: 'COOPAMA (recebe e coleta)',
      street: 'Rua Miguel Ângelo, 385 – Maria da Graça',
      lat: -22.886641,
      lng: -43.265199,
    },
    {
      region: 'Zona Norte',
      label: 'ACMR',
      street: 'Rua Itaigara, 77 – Coelho Neto',
      info: 'acmr2008@yahoo.com.br',
      lat: -22.834042,
      lng: -43.348966,
    },
  ];
  rooms = [
    {
      title: 'Atlântico Copacabana',
      picture: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/17/83/178344488.jpeg',
      description: 'Rio de Janeiro, 0.4 miles away from the beach',
      stars: 3.8,
      reviewsCount: 8,
      additionals: ['Cafézinho'],
      distance: '15 min',
    },
    {
      title: 'Argentina',
      picture: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/20/60/206016446.jpeg',
      description: 'Rio de Janeiro, 0.4 miles away from the beach',
      stars: 4.5,
      reviewsCount: 4,
      additionals: ['Banho', 'Sofá grande'],
      distance: '10 min',
    },
    {
      title: 'Everest Rio',
      picture: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/uploadimages/14/31/14318574.jpeg',
      description: 'Rio de Janeiro, 0.4 miles away from the beach',
      stars: 4.3,
      reviewsCount: 23,
      additionals: ['Banho'],
      distance: '5 min',
    }
  ];

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

  solicitate() {
    const loading = this.loadingCtrl.create({duration: 500, content: 'Procurando...'});
    loading.present();
    loading.onDidDismiss(() => this.navCtrl.push(RequestCompletePage));
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
