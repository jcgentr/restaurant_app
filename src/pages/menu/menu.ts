import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { EditItemPage } from '../edit-item/edit-item';
import { Events} from 'ionic-angular';
import { Parse } from 'parse';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

	item: any;
  items: any = [];
	

  constructor(private streamingMedia: StreamingMedia, public events: Events, public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
 	
    this.items = this.dataService.getDataMenu();
    // after adding a new item
    this.events.subscribe("newitem", (newItem) => {
      //console.log("YEAH i am in here");
      this.items.push(newItem);
    });
    // after editing an item
    this.events.subscribe("updateItem", (updateItem) => {
      function findWithAttr(array, attr, value) {
          for(var i = 0; i < array.length; i += 1) {
              if(array[i][attr] === value) {
                  return i;
              }
          }
          return -1;
      }
      let x = findWithAttr(this.items, 'id', updateItem.id); 

      this.items.splice(x,1);
      console.log("Updating menu item");
      this.items.push(updateItem);
    });

  }

  ionViewDidEnter() {
    

  }

  ionViewDidLoad() {
   
  }

  addItem(){
  	this.navCtrl.push(AddItemPage);
  }

  itemDetail(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });

  }

  editItem(item) {
    this.navCtrl.push(EditItemPage,{
      item: item
    });
  }

  removeItem(item): void{

    let index = this.items.indexOf(item);

    if(index > -1){
      this.items.splice(index, 1);
    }

    const Menu = Parse.Object.extend('Menu');
    var menu = new Menu();
    
    menu.id = item.id;
    
    menu.destroy({
      success: function(menu) {
        // The object was deleted from the Parse Cloud.
        console.log(menu + " has been deleted.");
      },
      error: function(menu, error) {
        // The delete failed.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });

  }

  // startVideo() {
  //   let options: StreamingVideoOptions = {
  //     successCallback: () => { console.log('Finished Video') },
  //     errorCallback: (e) => { console.log('Error: ', e) },
  //     orientation: 'portrait'
  //   };
 
  //   // http://www.sample-videos.com/
  //   this.streamingMedia.playVideo('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4', options);
  // }

}