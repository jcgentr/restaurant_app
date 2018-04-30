import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import { Events} from 'ionic-angular';

 
@Injectable()
export class Data {
private parseAppId: string = 'lMgSSaoqEVXJYUqoFt8Y7LUCyJJB7p3ZRFvZgYYw';
private parseJSKey: string= 'aTIFkyv9Qn1elLLby83OexmrcIdPdrOB5pjUCKZY';
private parseServerUrl: string = 'https://parseapi.back4app.com/';
items = [];
	
  constructor(public Storage: Storage, public events: Events){
 
    Parse.initialize(this.parseAppId, this.parseJSKey);
    Parse.serverURL = this.parseServerUrl;

    console.log('Initiated Parse');

    const Menu = Parse.Object.extend('Menu');

    let query = new Parse.Query(Menu);
    query.limit(1000);

    query.find().then((menus) => {
      // resolve(menus);
      console.log(menus.length);
    }, (error) => {
      //reject(error);
      console.log("error");
    });

    // subscribe to my query
    var client = new Parse.LiveQueryClient({
      applicationId: 'lMgSSaoqEVXJYUqoFt8Y7LUCyJJB7p3ZRFvZgYYw',
      serverURL: 'wss://' + 'livedatingapp.back4app.io', // Example: 'wss://livequerytutorial.back4app.io'
      javascriptKey: 'aTIFkyv9Qn1elLLby83OexmrcIdPdrOB5pjUCKZY',
      masterKey: 'reR2yZXaiRqdc51a8H3shVeEG9xnxIWw1W2SUw84'
    });
    client.open();

  }
 
  setMenuItem(name, price, description, category, imageurl) {

    var Menu = Parse.Object.extend("Menu");
    var menu = new Menu();

    menu.set("name", name);
    menu.set("price", parseFloat(price));
    menu.set("description",description);
    menu.set("category", category);
    menu.set("imageurl", imageurl);
    
    var self = this;
    menu.save(null, {
      success: function(menu) {
        // Execute any logic that should take place after the object is saved.
        console.log('New object created with objectId: ' + menu.id);
        let newItem = {
              name: name,
              price: price,
              description: description,
              category: category,
              imageurl: imageurl,
              id: menu.id
        };
        self.events.publish("newitem",newItem);
        
      },
      error: function(menu, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    }); 
  
  }


  getDataMenu() {
    const Menu = Parse.Object.extend('Menu');

    let query = new Parse.Query(Menu);
    query.limit(1000);
    var items=[];

    query.find().then((menus) => {
      // resolve(menus);
      console.log(menus.length);
      
      
      for (var i = menus.length - 1; i >= 0; i--) {
          var mymenu = {
            name: menus[i].get("name"),
            price: menus[i].get("price"),
            category: menus[i].get("category"),
            imageurl: menus[i].get("imageurl"),
            description: menus[i].get("description"),
            id: menus[i].id
          }
         
          items.push(mymenu);
      }
      
      

    }, (error) => {
      //reject(error);
      console.log("error");
    });
    return items;
    
  }

  getDataOrder() {
    
    const Order = Parse.Object.extend('Order');

    let query = new Parse.Query(Order);
    query.limit(1000);
    query.include("menuid")
    var items=[];

    query.find().then((orders) => {
      // resolve(orders);
      console.log(orders.length);
      
      
      for (var i = orders.length - 1; i >= 0; i--) {
          var myorders = {
            name: orders[i].get("menuid").get("name"),
            price: orders[i].get("menuid").get("price"),
            description: orders[i].get("menuid").get("description"),
            category: orders[i].get("menuid").get("category"),
            imageurl: orders[i].get("menuid").get("imageurl"),
            quantity: orders[i].get("itemQty"),
            date: orders[i].get("createdAt")
          }

          items.push(myorders);
      }
      
      

    }, (error) => {
      //reject(error);
      console.log("error");
    });
    return items;

  }
 
  saveOrderItem(order){
    // 
    var Order = Parse.Object.extend("Order");
    var o = new Order();

    o.set("totalAmount", order.price*order.quantity);
    o.set("itemQty", parseFloat(order.quantity));
    const Menu = Parse.Object.extend('Menu');
    var menu = new Menu();
    
    menu.id = order.menuid;
    o.set("menuid",menu);

    var self = this;
    o.save(null, {
      success: function(o) {
        // Execute any logic that should take place after the object is saved.
        console.log('New object created with objectId: ' + o.id);
        let newOrder = {
          name: order.name,
          price: order.price,
          description: order.description,
          category: order.category,
          imageurl: order.imageurl,
          quantity: order.quantity,
          date: o.get("createdAt"),
          menuid: order.menuid
        };

        self.events.publish("neworder", newOrder);
      },
      error: function(o, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  }


}