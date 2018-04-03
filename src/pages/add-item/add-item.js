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
import { NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
var AddItemPage = /** @class */ (function () {
    function AddItemPage(navCtrl, view, dataService) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.dataService = dataService;
        this.quantity = 1;
    }
    //var Order = Parse.Object.extend("")
    AddItemPage.prototype.saveItem = function () {
        this.dataService.setMenuItem(this.itemName, this.price, this.description, this.category, this.url, this.quantity);
        this.view.dismiss();
    };
    AddItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    AddItemPage = __decorate([
        Component({
            selector: 'page-add-item',
            templateUrl: 'add-item.html'
        }),
        __metadata("design:paramtypes", [NavController, ViewController, Data])
    ], AddItemPage);
    return AddItemPage;
}());
export { AddItemPage };
//# sourceMappingURL=add-item.js.map