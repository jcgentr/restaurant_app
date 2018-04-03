import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Events} from 'ionic-angular';



@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

  name;
  price:number;
  description;
  category;
  imageurl;

  constructor(public events: Events, public navCtrl: NavController, public view: ViewController, public dataService: Data) {

  }
  //var Order = Parse.Object.extend("")

  saveItem() {
    console.log(this.price);
    this.dataService.setMenuItem(this.name, this.price, this.description, this.category, this.imageurl);
    // let newItem ={
    //       name: this.name,
    //       price: this.price,
    //       description: this.description,
    //       category: this.category,
    //       imageurl: this.imageurl
    // }; 
    //console.log("here we go!");
    //this.events.publish('newitem', newItem);
    this.view.dismiss();

  }

  close() {
    this.view.dismiss();
  }


  takePicture(){

  }

}