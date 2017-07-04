import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {LoadingController} from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController) {
    this.presentLoadingCustom()
  }

  amatol() {
      let alert = this.alertController.create({
          title: 'ES Amato Lusitano',
          subTitle: 'O Agrupamento está sediado na Escola secundária de Amato Lusitano, antiga escola técnica – Escola Comercial e Industrial de Castelo Branco. <p> A partir de 1974, quando a distinção entre os diferentes tipos de escola desapareceu e o ensino passou a ser unificado, a escola passou a designar-se Escola Secundária de Castelo Branco com turmas desde o 7.º ao 11.º ano, tendo posteriormente sido acrescentado o 12.º ano ao Sistema Educativo português. <p> Em 1987, passou a designar-se Escola Secundária de Amato Lusitano. O ensino técnico-profissional, criado em 1983, teve grande sucesso na altura, continuando a distinguir-se na atualidade com o alargamento a novas áreas.',
          buttons: ['OK']
      });
      alert.present();
  }

joaor() {
    let alert = this.alertController.create({
        title: ' EB2/3 João Roiz',
        subTitle : 'A EBI João Roiz entrou em funcionamento em 2001/2002 e em 2003/2004, agregou 4 escolas do ensino básico – a EB1 Quinta da Granja, o Jardim-de-infância/ EB1 do Valongo, a EB1 Cebolais de Cima e a EB1 Retaxo -, formando o Agrupamento de Escolas João Roiz de Castelo Branco.',
        buttons: ['OK']
    });
    alert.present();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner:`hide`,
      content: `
      <div class="preloader">
      <div class="loader"></div>
      </div>
      <img src="assets/icon/RedBook.png">`,
      duration: 1500
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
  }

}
