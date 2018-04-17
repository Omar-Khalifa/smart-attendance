import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth'

import { TabsPage } from '../tabs/tabs';

import { TproPage } from '../tpro/tpro';

@IonicPage()
@Component({
  selector: 'page-login-te',
  templateUrl: 'login-te.html',
})
export class LoginTePage
 {

   email :string ="" ;

   password :string ="" ;

   secretCode :string ;

   sc='1234';

   constructor( public register: AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) { }

   TeLogin()  {

   if (this.secretCode == this.sc)
   
    { this.register.auth.signInWithEmailAndPassword(this.email, this.password)
    
      .then(user => { this.navCtrl.push (TabsPage) ; })
    
      .catch (function (error) { console.log(error) }); 
    
  
    } 

    else {  console.log("Wrong Secret Code")    }
    
  }

  ionViewDidLoad() { console.log('ionViewDidLoad LoginTePage'); }
  
}
