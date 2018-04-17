import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth'

import { LoginPage }   from '../Login/Login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage 
{

  constructor( public fire : AngularFireAuth , public navCtrl: NavController) 
  {
    fire.auth.onAuthStateChanged ( function (user) { if(!user) { navCtrl.setRoot(LoginPage) } } );
  }
  
    logout() { this.fire.auth.signOut() .then (user => { this.navCtrl.setRoot(LoginPage) ; }) }

}