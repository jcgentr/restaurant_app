webpackJsonp([3],{

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditItemPage = (function () {
    function EditItemPage(events, view, navCtrl, navParams) {
        this.events = events;
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditItemPage');
        this.name = this.navParams.get('item').name;
        this.price = this.navParams.get('item').price;
        this.category = this.navParams.get('item').category;
        this.imageurl = this.navParams.get('item').imageurl;
        this.description = this.navParams.get('item').description;
        this.menuid = this.navParams.get('item').id;
    };
    EditItemPage.prototype.saveItem = function () {
        var updateItem = {
            name: this.name,
            price: this.price,
            description: this.description,
            category: this.category,
            imageurl: this.imageurl,
            id: this.menuid
        };
        // Create the object.
        var Menu = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Menu");
        var menu = new Menu();
        menu.id = this.menuid;
        var self = this;
        menu.save(null, {
            success: function (menu) {
                // Now let's update it with some new data. 
                menu.set("name", self.name);
                menu.set("price", parseFloat(self.price));
                menu.set("category", self.category);
                menu.set("imageurl", self.imageurl);
                menu.set("description", self.description);
                menu.save();
            }
        });
        this.events.publish('updateItem', updateItem);
        this.view.dismiss();
    };
    EditItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-item',template:/*ion-inline-start:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/edit-item/edit-item.html"*/'<!-- Edit item -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Edit Item</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Item Name</ion-label>\n      <ion-input type="text" [(ngModel)]="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Price (USD $) </ion-label>\n      <ion-input type="number" [(ngModel)]="price"></ion-input>\n    </ion-item>\n    <br/>\n    <ion-item>\n      <ion-label>Category</ion-label>\n      <ion-select [(ngModel)]="category">\n        <ion-option value="Dish">Dish</ion-option>\n        <ion-option value="Dessert">Dessert</ion-option>\n        <ion-option value="Drink">Drink</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Photo (URL) </ion-label>\n      <ion-input type="text" [(ngModel)]="imageurl"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Description</ion-label>\n      <ion-input type="text" [(ngModel)]="description"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button block ion-button color="primary" (click)="saveItem()">Save</button>\n'/*ion-inline-end:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/edit-item/edit-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EditItemPage);
    return EditItemPage;
}());

//# sourceMappingURL=edit-item.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemDetailPage = (function () {
    function ItemDetailPage(events, navCtrl, navParams, view, dataService) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.dataService = dataService;
        this.quantity = 1;
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        this.name = this.navParams.get('item').name;
        this.price = this.navParams.get('item').price;
        this.category = this.navParams.get('item').category;
        this.imageurl = this.navParams.get('item').imageurl;
        this.description = this.navParams.get('item').description;
        this.menuid = this.navParams.get('item').id;
        console.log('Menu id of loaded item: ' + this.menuid);
    };
    ItemDetailPage.prototype.saveOrder = function () {
        var order = {
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
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/item-detail/item-detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{name}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="saveOrder()">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <img src="{{imageurl}}" height="200" width="100" />\n      <br/> {{category}} ${{price}}\n      <br/>\n      <br/> {{description}}\n      <br/>\n      <ion-item>\n        <ion-range min="1" max="15" [(ngModel)]="quantity" color="primary" pin="true" snaps="true">\n          <ion-label range-left>1</ion-label>\n          <ion-label range-right>15</ion-label>\n        </ion-range>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label>Select A PickUp Time</ion-label>\n        <ion-datetime minuteValues="0,15,30,45" displayFormat="MM-DD-YY  HH:mm" [(ngModel)]="date">\n        </ion-datetime>\n      </ion-item> -->\n      <br/>\n      <p> Total: ${{price}} x {{quantity}} = $ {{price*quantity}} </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/item-detail/item-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* Data */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderDetailPage = (function () {
    function OrderDetailPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    OrderDetailPage.prototype.ionViewDidLoad = function () {
        this.name = this.navParams.get('order').name;
        this.price = this.navParams.get('order').price;
        this.category = this.navParams.get('order').category;
        this.imageurl = this.navParams.get('order').imageurl;
        this.description = this.navParams.get('order').description;
        this.quantity = this.navParams.get('order').quantity;
        this.date = this.navParams.get('order').date;
    };
    OrderDetailPage.prototype.close = function () {
        this.view.dismiss();
    };
    OrderDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-detail',template:/*ion-inline-start:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/order-detail/order-detail.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>\n      {{date}}\n    </ion-title>\n     \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n       <img src="{{imageurl}}"  height="200" width="100" />\n\n      <ion-card-title>\n      {{name}}\n      </ion-card-title>\n      {{category}}\n      ${{price}}\n       <br/>\n       {{description}}\n    \n    <p> Total: ${{price}} x {{quantity}} = ${{price*quantity}} </p>\n\n  </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/order-detail/order-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], OrderDetailPage);
    return OrderDetailPage;
}());

//# sourceMappingURL=order-detail.js.map

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-item/edit-item.module": [
		463,
		2
	],
	"../pages/item-detail/item-detail.module": [
		464,
		1
	],
	"../pages/order-detail/order-detail.module": [
		465,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 229;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Providers

// https://ionicframework.com/docs/api/navigation/NavController/#setRoot
// Pages



var SigninPage = (function () {
    function SigninPage(events, alertCtrl, navCtrl, data, loadCtrl) {
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.registerPage = __WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */];
        this.password = '';
        this.username = '';
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('Initiated Signin');
    };
    SigninPage.prototype.doSignin = function () {
        var loader = this.loadCtrl.create({
            content: 'Signing in...'
        });
        loader.present();
        var self = this;
        __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.logIn(this.username, this.password, {
            success: function (user) {
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                loader.dismissAll();
                console.log("user: " + user.get("username") + " signed in.");
            },
            error: function (user, error) {
                // The login failed.
                var alertt = self.alertCtrl.create({
                    title: 'Invalid Login! Incorrect Username and/or Password!',
                    buttons: ['Dismiss']
                });
                alertt.present();
                loader.dismissAll();
                //alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/signin/signin.html"*/'<ion-content padding-top>\n\n  <p class="logo">\n    <!-- <img src="http://placehold.it/300x200"/> -->\n    <img src="../../assets/imgs/restLogo.png" />\n  </p>\n\n  <form (submit)="doSignin()">\n    <ion-list inset padding>\n\n      <ion-item>\n        <ion-label stacked>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="username" name="username"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n      </ion-item>\n      \n      <div padding>\n        <button ion-button color="accent" block>Login</button>\n        <p style="text-align: center">Don\'t you have an acccount? <a [navPush]="registerPage">Signup</a></p>\n      </div>\n\n    </ion-list>\n    </form>\n\n</ion-content>'/*ion-inline-end:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/signin/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = (function () {
    function SignupPage(navCtrl, loadCtrl) {
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.password = '';
        this.username = '';
        this.verify = '';
        this.email = '';
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('Initiate Signup');
    };
    // TODO: form validation
    SignupPage.prototype.doRegister = function () {
        // let loader = this.loadCtrl.create({
        //   content: 'Signing up...'
        // });
        // loader.present();
        // this.authPvdr.signup(this.username, this.password, this.email).subscribe((success) => {
        //   this.navCtrl.setRoot(TabsPage);
        //   loader.dismissAll();
        // }, (error) => {
        //   loader.dismissAll();
        // });
        var user = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User();
        user.set("username", this.username);
        user.set("password", this.password);
        user.set("email", this.email);
        // other fields can be set just like with Parse.Object
        //user.set("phone", "415-392-0202");
        var self = this;
        user.signUp(null, {
            success: function (user) {
                // Hooray! Let them use the app now.
                console.log("signup success " + user.get("username"));
                self.navCtrl.pop();
            },
            error: function (user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });
        console.log("sign up");
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <form (submit)="doRegister()">\n    <ion-list padding inset scroll="false">\n\n      <ion-item>\n        <ion-label stacked>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="username" name="username"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Verify Password</ion-label>\n        <ion-input type="password" [(ngModel)]="confirm" name="verify"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="email" name="confirm"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="accent" block [disabled]="email.length == \'0\' || username.length == \'0\' || password.length == \'0\' || confirm.length == \'0\'">Register</button>\n      </div>\n\n    </ion-list>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_order_my_order__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__my_order_my_order__["a" /* MyOrderPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/tabs/tabs.html"*/'<ion-tabs >\n  <ion-tab [root]="tab1Root" tabTitle="Menu" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="My Orders" tabIcon="filing"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_detail_order_detail__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyOrderPage = (function () {
    function MyOrderPage(events, navParams, navCtrl, modalCtrl, dataService) {
        var _this = this;
        this.events = events;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.orders = [];
        this.orders = this.dataService.getDataOrder();
        this.events.subscribe("neworder", function (order) {
            console.log("YEAH i am in here");
            _this.orders.push(order);
        });
    }
    MyOrderPage.prototype.ionViewDidEnter = function () {
    };
    MyOrderPage.prototype.viewOrder = function (order) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_detail_order_detail__["a" /* OrderDetailPage */], {
            order: order
        });
    };
    MyOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-order',template:/*ion-inline-start:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/my-order/my-order.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>My Orders</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <ion-list>\n\n  <ion-card *ngFor="let order of orders" (click)="viewOrder(order)">\n  <img src="{{order.imageurl}}"  height="150" width="100" />\n  <ion-card-content>\n    <ion-card-title>\n      {{order.name}}\n      </ion-card-title>\n    <p >\n      Quantity: {{order.quantity}}\n      <br/>\n     Total: ${{order.price*order.quantity}} \n    <br/> \n    Date/Time: {{order.date}}\n  </p>\n  </ion-card-content>\n</ion-card> \n\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/my-order/my-order.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* Data */]])
    ], MyOrderPage);
    return MyOrderPage;
}());

//# sourceMappingURL=my-order.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_item_add_item__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_detail_item_detail__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_item_edit_item__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_parse__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MenuPage = (function () {
    function MenuPage(events, navParams, navCtrl, modalCtrl, dataService) {
        var _this = this;
        this.events = events;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.items = [];
        this.items = this.dataService.getDataMenu();
        // after adding a new item
        this.events.subscribe("newitem", function (newItem) {
            //console.log("YEAH i am in here");
            _this.items.push(newItem);
        });
        // after editing an item
        this.events.subscribe("updateItem", function (updateItem) {
            function findWithAttr(array, attr, value) {
                for (var i = 0; i < array.length; i += 1) {
                    if (array[i][attr] === value) {
                        return i;
                    }
                }
                return -1;
            }
            var x = findWithAttr(_this.items, 'id', updateItem.id);
            _this.items.splice(x, 1);
            console.log("Updating menu item");
            _this.items.push(updateItem);
        });
    }
    MenuPage.prototype.ionViewDidEnter = function () {
    };
    MenuPage.prototype.ionViewDidLoad = function () {
    };
    MenuPage.prototype.addItem = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_item_add_item__["a" /* AddItemPage */]);
    };
    MenuPage.prototype.itemDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__item_detail_item_detail__["a" /* ItemDetailPage */], {
            item: item
        });
    };
    MenuPage.prototype.editItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_item_edit_item__["a" /* EditItemPage */], {
            item: item
        });
    };
    MenuPage.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        var Menu = __WEBPACK_IMPORTED_MODULE_6_parse__["Parse"].Object.extend('Menu');
        var menu = new Menu();
        menu.id = item.id;
        menu.destroy({
            success: function (menu) {
                // The object was deleted from the Parse Cloud.
                console.log(menu + " has been deleted.");
            },
            error: function (menu, error) {
                // The delete failed.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/menu/menu.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Menu</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    \n    <ion-item-sliding *ngFor="let item of items" style="background-color: #bf42f4, border-radius: 8px;">\n\n      <button class="itemButtons" ion-item (click)="itemDetail(item)">\n        {{item.name}}<br>\n        {{item.category}}<br>\n        ${{item.price}}\n        <ion-thumbnail item-left>\n          <ion-img src={{item.imageurl}}></ion-img>\n        </ion-thumbnail>\n      </button>\n      \n      <ion-item-options>\n        <button class="slideButtons" ion-button color="edit" (click)="editItem(item)">\n          <ion-icon name="clipboard"></ion-icon>\n        </button>\n        <button class="slideButtons" ion-button color="danger" (click)="removeItem(item)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/menu/menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* Data */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddItemPage = (function () {
    function AddItemPage(camera, alertCtrl, events, navCtrl, view, dataService) {
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.navCtrl = navCtrl;
        this.view = view;
        this.dataService = dataService;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    //var Order = Parse.Object.extend("")
    AddItemPage.prototype.saveItem = function () {
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
    };
    AddItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    AddItemPage.prototype.takePicture = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.imageurl = base64Image;
        }, function (err) {
            // The picture failed.
            var alertt = _this.alertCtrl.create({
                title: 'Picture Failed!',
                buttons: ['Dismiss']
            });
            alertt.present();
        });
    };
    AddItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-item',template:/*ion-inline-start:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/add-item/add-item.html"*/'<!--\n  Generated template for the AddItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Add Menu Item</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Item Name</ion-label>\n      <ion-input type="text" [(ngModel)]="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Price (USD $) </ion-label>\n      <ion-input type="number" [(ngModel)]="price"></ion-input>\n    </ion-item>\n    <br/>\n    <ion-item>\n      <ion-label>Category</ion-label>\n      <ion-select interface="popover" [(ngModel)]="category">\n        <ion-option value="Dish">Dish</ion-option>\n        <ion-option value="Dessert">Dessert</ion-option>\n        <ion-option value="Drink">Drink</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <!-- <ion-label floating>Photo (URL) </ion-label>\n      <ion-input type="text" [(ngModel)]="imageurl"></ion-input> -->\n    <ion-buttons>\n      <button ion-button icon-only (click)="takePicture()">\n        <ion-icon name="camera"></ion-icon>\n      </button> Take Picture\n    </ion-buttons>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Description</ion-label>\n      <ion-input type="text" [(ngModel)]="description"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button block ion-button color="primary" (click)="saveItem()">Save</button>\n</ion-content>\n'/*ion-inline-end:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/pages/add-item/add-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* Data */]])
    ], AddItemPage);
    return AddItemPage;
}());

//# sourceMappingURL=add-item.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(330);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_my_order_my_order__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_order_detail_order_detail__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_item_add_item__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_item_edit_item__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_data__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_my_order_my_order__["a" /* MyOrderPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_item_edit_item__["a" /* EditItemPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit-item/edit-item.module#EditItemPageModule', name: 'EditItemPage', segment: 'edit-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-detail/order-detail.module#OrderDetailPageModule', name: 'OrderDetailPage', segment: 'order-detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_my_order_my_order__["a" /* MyOrderPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_item_edit_item__["a" /* EditItemPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_data__["a" /* Data */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jcgentr/Desktop/Spring18_Courses/MobileAppDev/Ionic/hw3app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Data = (function () {
    function Data(Storage, events) {
        this.Storage = Storage;
        this.events = events;
        this.parseAppId = 'lMgSSaoqEVXJYUqoFt8Y7LUCyJJB7p3ZRFvZgYYw';
        this.parseJSKey = 'aTIFkyv9Qn1elLLby83OexmrcIdPdrOB5pjUCKZY';
        this.parseServerUrl = 'https://parseapi.back4app.com/';
        this.items = [];
        __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].initialize(this.parseAppId, this.parseJSKey);
        __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].serverURL = this.parseServerUrl;
        console.log('Initiated Parse');
        var Menu = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend('Menu');
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(Menu);
        query.limit(1000);
        query.find().then(function (menus) {
            // resolve(menus);
            console.log(menus.length);
        }, function (error) {
            //reject(error);
            console.log("error");
        });
        // subscribe to my query
        var client = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].LiveQueryClient({
            applicationId: 'lMgSSaoqEVXJYUqoFt8Y7LUCyJJB7p3ZRFvZgYYw',
            serverURL: 'wss://' + 'restaurantApp.back4app.io',
            javascriptKey: 'aTIFkyv9Qn1elLLby83OexmrcIdPdrOB5pjUCKZY',
            masterKey: 'reR2yZXaiRqdc51a8H3shVeEG9xnxIWw1W2SUw84'
        });
        client.open();
    }
    Data.prototype.setMenuItem = function (name, price, description, category, imageurl) {
        var Menu = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Menu");
        var menu = new Menu();
        menu.set("name", name);
        menu.set("price", parseFloat(price));
        menu.set("description", description);
        menu.set("category", category);
        menu.set("imageurl", imageurl);
        var self = this;
        menu.save(null, {
            success: function (menu) {
                // Execute any logic that should take place after the object is saved.
                console.log('New object created with objectId: ' + menu.id);
                var newItem = {
                    name: name,
                    price: price,
                    description: description,
                    category: category,
                    imageurl: imageurl,
                    id: menu.id
                };
                self.events.publish("newitem", newItem);
            },
            error: function (menu, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    };
    Data.prototype.getDataMenu = function () {
        var Menu = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend('Menu');
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(Menu);
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
                    description: menus[i].get("description"),
                    id: menus[i].id
                };
                items.push(mymenu);
            }
        }, function (error) {
            //reject(error);
            console.log("error");
        });
        return items;
    };
    Data.prototype.getDataOrder = function () {
        var Order = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend('Order');
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(Order);
        query.limit(1000);
        query.include("menuid");
        var items = [];
        query.find().then(function (orders) {
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
                };
                items.push(myorders);
            }
        }, function (error) {
            //reject(error);
            console.log("error");
        });
        return items;
    };
    Data.prototype.saveOrderItem = function (order) {
        // 
        var Order = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Order");
        var o = new Order();
        o.set("totalAmount", order.price * order.quantity);
        o.set("itemQty", parseFloat(order.quantity));
        var Menu = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend('Menu');
        var menu = new Menu();
        menu.id = order.menuid;
        o.set("menuid", menu);
        var self = this;
        o.save(null, {
            success: function (o) {
                // Execute any logic that should take place after the object is saved.
                console.log('New object created with objectId: ' + o.id);
                var newOrder = {
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
            error: function (o, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    };
    Data = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]])
    ], Data);
    return Data;
}());

//# sourceMappingURL=data.js.map

/***/ })

},[306]);
//# sourceMappingURL=main.js.map