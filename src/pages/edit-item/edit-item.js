var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditItemPage = /** @class */ (function () {
    function EditItemPage(navCtrl, navParams) {
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
    };
    EditItemPage.prototype.saveItem = function () {
        // this.navCtrl.push(MenuPage,{
        //    name: this.name,
        //    price: this.price,
        //    category: this.category,
        //    imageurl: this.imageurl,
        //    description: this.description
        //  });
    };
    EditItemPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-edit-item',
            templateUrl: 'edit-item.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], EditItemPage);
    return EditItemPage;
}());
export { EditItemPage };
//# sourceMappingURL=edit-item.js.map