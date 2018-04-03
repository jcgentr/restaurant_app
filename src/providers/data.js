var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import { Events } from 'ionic-angular';
var Data = /** @class */ (function () {
    function Data(Storage, events) {
        this.Storage = Storage;
        this.events = events;
        this.parseAppId = 'lMgSSaoqEVXJYUqoFt8Y7LUCyJJB7p3ZRFvZgYYw';
        this.parseJSKey = 'aTIFkyv9Qn1elLLby83OexmrcIdPdrOB5pjUCKZY';
        this.parseServerUrl = 'https://parseapi.back4app.com/';
        this.items = [];
        Parse.initialize(this.parseAppId, this.parseJSKey);
        Parse.serverURL = this.parseServerUrl;
        console.log('Initiated Parse');
        var Menu = Parse.Object.extend('Menu');
        var query = new Parse.Query(Menu);
        query.limit(1000);
        query.find().then(function (menus) {
            // resolve(menus);
            console.log(menus.length);
        }, function (error) {
            //reject(error);
            console.log("error");
        });
        //this.items = this.getDataMenu();
    }
    Data.prototype.setMenuItem = function (itemName, price, description, category, url, quantity) {
        //   	let item={
        //   	itemName : itemName,
        // 	price: price,
        //     description: description,
        //     category: category,
        //     url: url,
        //     quantity: quantity= 1,
        // };
        // this.saveMenuItem(item);
    };
    Data.prototype.getDataMenu = function () {
        var Menu = Parse.Object.extend('Menu');
        var query = new Parse.Query(Menu);
        query.limit(1000);
        var items = [];
        query.find().then(function (menus) {
            // resolve(menus);
            console.log(menus.length);
            for (var i = menus.length - 1; i >= 0; i--) {
                var mymenu = {
                    name: menus[i].get("name"),
                    price: menus[i].get("price"),
                    category: menus[i].get("category"),
                    imageurl: menus[i].get("imageurl"),
                    id: menus[i].get("menuid")
                };
                items.push(mymenu);
            }
        }, function (error) {
            //reject(error);
            console.log("error");
        });
        return items;
    };
    Data.prototype.saveMenuItem = function (item) {
        // this.items.push(item);
        //  let newData = JSON.stringify(item);
        //  this.Storage.set('items', newData);
    };
    Data.prototype.setOrderItem = function (itemName, price, description, category, url, quantity, myDate, menuid) {
        var order = {
            itemName: itemName,
            price: price,
            description: description,
            category: category,
            url: url,
            quantity: quantity,
            myDate: myDate,
            menuid: menuid
        };
        this.saveOrderItem(order);
    };
    Data.prototype.getDataOrder = function () {
        //return this.Storage.get('items');
        // return this.orders;
        var Menu = Parse.Object.extend('Menu');
        var query = new Parse.Query(Menu);
        query.limit(1000);
        var items = [];
        query.find().then(function (menus) {
            // resolve(menus);
            console.log(menus.length);
            for (var i = menus.length - 1; i >= 0; i--) {
                var mymenu = {
                    name: menus[i].get("name"),
                    price: menus[i].get("price"),
                    category: menus[i].get("category"),
                    imageurl: menus[i].get("imageurl"),
                    id: menus[i].get("menuid")
                };
                items.push(mymenu);
            }
        }, function (error) {
            //reject(error);
            console.log("error");
        });
    };
    Data.prototype.saveOrderItem = function (order) {
        // 
        var Order = Parse.Object.extend("Order");
        var order = new Order();
        order.set("totalAmount", order.price * order.quantity);
        order.set("itemqty", parseFloat(order.quantity));
        var Menu = Parse.Object.extend('Menu');
        var menu = new Menu();
        menu.id = order.menuid;
        order.set("menuid", menu);
        order.save(null, {
            success: function (order) {
                // Execute any logic that should take place after the object is saved.
                console.log('New object created with objectId: ' + order.id);
                var newOrder = {
                    name: order.name,
                    quantity: order.quantity
                };
                this.events.publish("neworder", newOrder);
            },
            error: function (order, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    };
    Data = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage, Events])
    ], Data);
    return Data;
}());
export { Data };
//# sourceMappingURL=data.js.map