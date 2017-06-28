import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post:any
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.post= navParams.get('post_data');
      console.log(this.post);
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad PostPage');
    }
  }
