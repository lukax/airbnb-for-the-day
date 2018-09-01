import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { RequestPage } from '../pages/request/request';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AgmCoreModule} from "@agm/core";
import {BarRatingModule} from "ngx-bar-rating";
import {LoginPage} from "../pages/login/login";
import {Facebook} from "@ionic-native/facebook";
import {NativeStorage} from "@ionic-native/native-storage";
import {FacebookModule} from "ngx-facebook";
import {RequestCompletePage} from "../pages/request-complete/request-complete";

@NgModule({
  declarations: [
    MyApp,
    RequestPage,
    RequestCompletePage,

    ListPage,
    LoginPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDF7Y4EToGHijFZUwOY_vu3tMFbU8CxASM',

    }),

    BarRatingModule,
    FacebookModule.forRoot(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RequestPage,
    RequestCompletePage,
    ListPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    Facebook,
    NativeStorage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}