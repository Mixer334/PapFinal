import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {PostPage} from '../../pages/post/post';
import {LoadingController} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
	api_url: string = 'http://aeal.edu.pt/wp-json/wp/v2/posts';
	items: any;

	constructor( private http: Http,public navCtrl: NavController, public loadingCtrl: LoadingController) {

  this.http.get(this.api_url).map(res => res.json()).subscribe(data => {

          this.items=data;
        }, (error)=> {
           console.log('error',error);
        });

        this.presentLoadingCustom()
    }

    itemTapped(event, item){
        this.navCtrl.push(PostPage, { item: item });
    }



presentLoadingCustom() {
  let loading = this.loadingCtrl.create({
    spinner:`hide`,
    content: `
    <div class="preloader">
    <div class="loader"></div>
    </div>
    <img src="assets/icon/RedBook.png">`,
    duration: 1000
  });

  loading.onDidDismiss(() => {
    console.log('Dismissed loading');
  });

  loading.present();
}
/*presentLoadingDefault() {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 2000);
}*/
}
