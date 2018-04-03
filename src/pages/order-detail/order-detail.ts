import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

    name;
    price;
    description;
    category;
    imageurl;
    quantity;
    date;

  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {
  }

  ionViewDidLoad() {
  	this.name = this.navParams.get('order').name;
    this.price = this.navParams.get('order').price;
    this.category = this.navParams.get('order').category;
    this.imageurl = this.navParams.get('order').imageurl;
    this.description = this.navParams.get('order').description;
    this.quantity = this.navParams.get('order').quantity;
    this.date = this.navParams.get('order').date;

       
   
  }

    close() {
    this.view.dismiss();
  }

}
