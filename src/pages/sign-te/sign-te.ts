import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth'

import { LoginTePage } from '../login-te/login-te';
import { TproPage } from '../tpro/tpro';
@IonicPage()
@Component({
  selector: 'page-sign-te',
  templateUrl: 'sign-te.html',
})
export class SignTePage {

  constructor(public register: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) { }

  email :string ='';
  
  password :string ='';

  secretCode :string ;

  sc='1234';

  TeacherSignup() {

    if (this.secretCode == this.sc)
    {
      this.register.auth.createUserWithEmailAndPassword (this.email,this.password) 
      
      .then(user => { this.navCtrl.push(TproPage) ,
       console.log("Email : " + this.email + "   " +"Password : " +this.password) })
      
      
      .catch(function (error) { console.log (error)  });

       
    }
         else {  console.log("Wrong Secret Code")    }
  }


  ionViewDidLoad() { console.log('ionViewDidLoad SignTePage'); }

}
