import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { Parse } from 'parse';
import { Events} from 'ionic-angular';
/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {
	  name;
    price;
    description;
    category;
    imageurl;
    menuid;

  constructor(public events: Events, public view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  	
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditItemPage');
    this.name = this.navParams.get('item').name;
    this.price = this.navParams.get('item').price;
    this.category = this.navParams.get('item').category;
    this.imageurl = this.navParams.get('item').imageurl;
    this.description = this.navParams.get('item').description;
    this.menuid = this.navParams.get('item').id;
  }

  saveItem(){
  	let updateItem ={
          name: this.name,
          price: this.price,
          description: this.description,
          category: this.category,
          imageurl: this.imageurl,
          id: this.menuid
    }; 
    // Create the object.
    var Menu = Parse.Object.extend("Menu");
    var menu = new Menu();
    menu.id = this.menuid;
    var self = this;
    menu.save(null, {
      success: function(menu) {
        // Now let's update it with some new data. 
        menu.set("name", self.name);
        menu.set("price", parseFloat(self.price));
        menu.set("category", self.category);
        menu.set("imageurl", self.imageurl);
        menu.set("description", self.description);
        menu.save();
      }
    });
    
    this.events.publish('updateItem',updateItem);
    this.view.dismiss();
  }

}
