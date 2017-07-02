import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicApp, App, MenuController,Platform  } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {LoadingController} from 'ionic-angular';

/**
 * Generated class for the ContactoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
  providers: [InAppBrowser]
})
export class ContactoPage {

  constructor(public loadingCtrl: LoadingController,public platform: Platform,public navCtrl: NavController,public navParams: NavParams, private iab: InAppBrowser,private _app: App, private _ionicApp: IonicApp, private _menu: MenuController) {
  this.presentLoadingCustom()
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

  launch(url) {
    this.platform.ready().then(() => {
        window.open(url, "_system", "location=no");
    });
}
presentLoadingCustom() {
  let loading = this.loadingCtrl.create({
    spinner:`hide`,
    content: `
    <div class="preloader">
    <div class="loader"></div>
    </div>
    Carregando`,
    duration: 1500
  });

  loading.onDidDismiss(() => {
    console.log('Dismissed loading');
  });

  loading.present();
}
}
