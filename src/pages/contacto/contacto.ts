import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicApp, App, MenuController,Platform  } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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

  constructor(public platform: Platform,public navCtrl: NavController,public navParams: NavParams, private iab: InAppBrowser,private _app: App, private _ionicApp: IonicApp, private _menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

  launch(url) {
    this.platform.ready().then(() => {
        open(url, "_blank", "location=no");
    });
}

}
