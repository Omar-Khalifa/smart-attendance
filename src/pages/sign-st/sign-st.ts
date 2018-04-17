import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SproPage } from '../spro/spro';

@IonicPage()
@Component({
  selector: 'page-sign-st',
  templateUrl: 'sign-st.html',
})
export class SignStPage 

 {

  constructor( public register: AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) { }

  email :string ='';

  password :string ='';

  StudentSignup() 
  {

    this.register.auth.createUserWithEmailAndPassword (this.email,this.password) 

    .then(user => { this.navCtrl.push ( SproPage ) ,
      
      console.log("Email : " + this.email + "   " +"Password : " +this.password) })
      
    .catch(function (error) { console.log(error) }); 
  }

  ionViewDidLoad() { console.log('ionViewDidLoad SignStPage') ; }

}
