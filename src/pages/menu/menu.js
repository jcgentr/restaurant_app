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
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { EditItemPage } from '../edit-item/edit-item';
var MenuPage = /** @class */ (function () {
    function MenuPage(navParams, navCtrl, modalCtrl, dataService) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.items = [];
        this.items = this.dataService.getDataMenu();
        // CAN ADD DEFAULT ITEMS ON MENU HERE
        this.item = {
            name: 'Brownie',
            price: 4.59,
            category: 'Dessert',
            imageurl: 'https://www.pamperedchef.com/iceberg/com/recipe/8665-lg.jpg',
            description: 'This is a delicious chocolate brownie.'
        };
        this.items.push(this.item);
        this.item = {
            name: 'Cosmo',
            price: 7.09,
            category: 'Drink',
            imageurl: 'https://cdn.liquor.com/wp-content/uploads/2010/05/03124724/the-cosmo.jpg',
            description: 'A cosmopolitan, or informally a cosmo, is a cocktail made with vodka, triple sec, cranberry juice, and freshly squeezed or sweetened lime juice.'
        };
        this.items.push(this.item);
    }
    MenuPage.prototype.ionViewDidLoad = function () {
    };
    MenuPage.prototype.addItem = function () {
        this.navCtrl.push(AddItemPage);
    };
    MenuPage.prototype.itemDetail = function (item) {
        this.navCtrl.push(ItemDetailPage, {
            item: item
        });
    };
    MenuPage.prototype.editItem = function (item) {
        this.navCtrl.push(EditItemPage, {
            item: item
        });
    };
    MenuPage.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    MenuPage = __decorate([
        Component({
            selector: 'page-menu',
            templateUrl: 'menu.html'
        }),
        __metadata("design:paramtypes", [NavParams, NavController, ModalController, Data])
    ], MenuPage);
    return MenuPage;
}());
export { MenuPage };
//# sourceMappingURL=menu.js.map