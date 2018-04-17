import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth'

import { LoginPage }   from '../Login/Login';

import {FirebaseObjectObservable} from 'angularfire2/database-deprecated';

import { AngularFireDatabase , AngularFireList   } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../../models/Profile';

@IonicPage()
@Component({
  selector: 'page-ssettings',
  templateUrl: 'ssettings.html',
})
export class SsettingsPage
 {

profileData : FirebaseObjectObservable<Profile>

  constructor( public af : AngularFireDatabase , public fire : AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) 
  {
   

    fire.auth.onAuthStateChanged ( function (user) { if(!user) { navCtrl.setRoot(LoginPage) } } );
  }

  logout()  { this.fire.auth.signOut() .then (user => { this.navCtrl.setRoot(LoginPage) ; }) }
  

}
