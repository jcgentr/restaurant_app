import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Events} from 'ionic-angular';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

	  name;
    price:number;
    description;
    category;
    imageurl;
    quantity =1;
    date;
    menuid;

  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public dataService: Data ) {
  }

  ionViewDidLoad() {

    this.name = this.navParams.get('item').name;
    this.price = this.navParams.get('item').price;
    this.category = this.navParams.get('item').category;
    this.imageurl = this.navParams.get('item').imageurl;
    this.description = this.navParams.get('item').description;
    this.menuid = this.navParams.get('item').id;
    console.log('Menu id of loaded item: ' + this.menuid);
       
  }
  
   
  saveOrder() {
    
    let order ={
          name: this.name,
          price: this.price,
          description: this.description,
          category: this.category,
          imageurl: this.imageurl,
          quantity: this.quantity,
          date: this.date,
          menuid: this.menuid
        }; 
        // this.events.publish("newORder", order);
        // console.log("order event published");
     this.dataService.saveOrderItem(order);
     console.log("ITEM ORDERED");
    

    this.view.dismiss();

  }

}
