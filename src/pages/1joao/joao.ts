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


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController) {
  }

  pushPage(){
    this.navCtrl.push(HomePage, {

    })
  }

  openFilters() {
      let alert = this.alertController.create({
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
