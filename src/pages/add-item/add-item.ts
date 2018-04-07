import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Events} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


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

  constructor(private camera: Camera, public alertCtrl: AlertController, public events: Events, public navCtrl: NavController, public view: ViewController, public dataService: Data) {

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

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  }

  takePicture(){
    this.camera.getPicture(this.options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
       let base64Image = 'data:image/jpeg;base64,' + imageData;
       this.imageurl = base64Image;

    }, (err) => {
       // The picture failed.
        let alertt = this.alertCtrl.create({
          title: 'Picture Failed!',
          buttons: ['Dismiss']
        });
        alertt.present();
    });
  }

}