import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Parse } from 'parse';

// Providers
import { Data } from '../../providers/data';
// https://ionicframework.com/docs/api/navigation/NavController/#setRoot

// Pages
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  registerPage = SignupPage;
  password: string = '';
  username: string = '';

  constructor(public events: Events, public alertCtrl: AlertController, public navCtrl: NavController, data:Data, private loadCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('Initiated Signin');
  }

  public doSignin() {
    let loader = this.loadCtrl.create({
      content: 'Signing in...'
    });
    loader.present();
    var self=this;
    Parse.User.logIn(this.username,this.password,{
      success: function(user) {
        self.navCtrl.setRoot(TabsPage);
        loader.dismissAll();
        console.log("user: " + user.get("username") + " signed in.");
        
      },
      error: function(user, error) {
        // The login failed.
        let alertt = self.alertCtrl.create({
          title: 'Invalid Login! Incorrect Username and/or Password!',
          buttons: ['Dismiss']
        });
        alertt.present();
        loader.dismissAll();
        
        //alert('Failed to create new object, with error code: ' + error.message);
        
      }

    });

    
  }

}
