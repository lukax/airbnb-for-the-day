import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RequestPage } from '../pages/request/request';
import {LoginPage} from "../pages/login/login";
import {RequestCompletePage} from "../pages/request-complete/request-complete";
import {EvaluateHostPage} from "../pages/evaluate-host/evaluate-host";
import {GuestCheckinPage} from "../pages/guest-checkin/guest-checkin";
import {TutorialPage} from "../pages/tutorial/tutorial";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Alugar um Quarto', component: RequestPage },
      { title: 'Entre ou cadastre-se', component: LoginPage },
      { title: 'Como funciona?', component: TutorialPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.nav.setRoot(this.rootPage);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
