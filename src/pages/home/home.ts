import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {PostPage} from '../../pages/post/post';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
	api_url: string = 'http://aeal.edu.pt/wp-json/wp/v2/posts';
	items: any;

	constructor( private http: Http,public navCtrl: NavController ) {
  this.http.get(this.api_url).map(res => res.json()).subscribe(data => {

          this.items=data;
        }, (error)=> {
           console.log('error',error);
        });
    }

    itemTapped(event, item){
        this.navCtrl.push(PostPage, { item: item });
    }

  }
