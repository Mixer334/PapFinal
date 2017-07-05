import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {HomePage} from '../home/home';



/**
 * Generated class for the JoaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-joao',
  templateUrl: 'joao.html',

})
export class JoaoPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

}

  pushPage(){
    let alert = this.alertCtrl.create({
      title: 'Bem vindo',
      subTitle: 'Esta aplicação é um projeto final de curso, espero que gostem.',
      buttons: ['Começar']
    });
    alert.present();

    this.navCtrl.setRoot(HomePage, {

    })

  }

  openFilters() {
      let alert = this.alertCtrl.create({
          title: 'AEAL',
          subTitle: 'Bem vindo à app do Agrupamento de Escolas Amato Lusitano <p> Diverte-te! ;)',
          buttons: ['OK']
      });

      alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad JoaoPage');
  }

}
