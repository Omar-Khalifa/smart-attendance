import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginTePage } from '../login-te/login-te';
import { SignTePage  } from '../sign-te/sign-te';
import { LoginStPage } from '../login-st/login-st';
import { SignStPage }  from '../sign-st/sign-st';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage
 {

  constructor( public navCtrl: NavController ) { }
  
  goToLoginTe  () { this.navCtrl.push (LoginTePage) ; }

  goToSignUpTe () { this.navCtrl.push (SignTePage)  ; }

  goToLoginSt  () { this.navCtrl.push (LoginStPage) ; }

  goToSignUpSt () { this.navCtrl.push (SignStPage)  ; }
  
}
