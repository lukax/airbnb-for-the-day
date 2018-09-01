import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Facebook} from "@ionic-native/facebook";
import {NativeStorage} from "@ionic-native/native-storage";
import {RequestPage} from "../request/request";
import {FacebookService, InitParams, LoginResponse} from "ngx-facebook";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


  FB_APP_ID: number = 713147829017775;
  user = {};

  constructor(
    public nav: NavController,
    // public fb: Facebook,
    public nativeStorage: NativeStorage,
    private fb: FacebookService,
  ) {
    let initParams: InitParams = {
      appId: '713147829017775',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
    // this.fb.browserInit(this.FB_APP_ID, "v2.8");
  }

  doLogin() {

    this.fb.login({
      scope: 'email'
    })
      .then((response: LoginResponse) => {
        console.log(response);

        let userId = response.authResponse.userID;
        let params = new Array<string>();
        this.fb.api("/me?fields=name,gender")
          .then((user) => {
            this.user = user;
            console.log(user);
            user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
            //now we have the users info, let's save it in the NativeStorage
            this.nativeStorage.setItem('user',
              {
                name: user.name,
                gender: user.gender,
                picture: user.picture
              })
              .then(() => {
                this.nav.push(RequestPage);
              },(error) => {
                console.log(error);
              })
          })
      })
      .catch((error: any) => console.error(error));

  }

  // doFbLogin(){
  //   let permissions = new Array<string>();
  //   let nav = this.navCtrl;
  //
  //   //the permissions your facebook app needs from the user
  //   permissions = ["public_profile"];
  //
  //   this.fb.login(permissions)
  //     .then((response) => {
  //       let userId = response.authResponse.userID;
  //       let params = new Array<string>();
  //
  //       //Getting name and gender properties
  //       this.fb.api("/me?fields=name,gender", params)
  //         .then((user) => {
  //           user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
  //           //now we have the users info, let's save it in the NativeStorage
  //           this.nativeStorage.setItem('user',
  //             {
  //               name: user.name,
  //               gender: user.gender,
  //               picture: user.picture
  //             })
  //             .then(() => {
  //               nav.push(RequestPage);
  //             },(error) => {
  //               console.log(error);
  //             })
  //         })
  //     }, (error) => {
  //       console.log(error);
  //     });
  // }

}
