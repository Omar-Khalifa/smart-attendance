import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth'

import { StabsPage } from '../stabs/stabs';

import { SproPage } from '../spro/spro';

@IonicPage()
@Component({
  selector: 'page-login-st',
  templateUrl: 'login-st.html',
})
export class LoginStPage {

  email :string ="" ;

  password :string ="" ;

  constructor( public register: AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) {  }

  stLogin()   {this.register.auth.signInWithEmailAndPassword(this.email , this.password)
    
    .then(user => { this.navCtrl.push (StabsPage) ; })
    .catch(function (error) { console.log(error) }); 
  
  } 


  ionViewDidLoad() { console.log('ionViewDidLoad LoginStPage');}

}
