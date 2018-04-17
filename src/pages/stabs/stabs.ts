import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth'

import { LoginPage }   from '../Login/Login';
import { ScodePage } from '../scode/scode';
import { SnotificationPage } from '../snotification/snotification';
import { SsettingsPage } from '../ssettings/ssettings';


@IonicPage()
@Component({ 

  templateUrl: 'stabs.html'


})
export class StabsPage {

  constructor( public fire:AngularFireAuth , public navCtrl: NavController, public navParams: NavParams)

   { 
     fire.auth.onAuthStateChanged ( function (user) { if(!user) { navCtrl.setRoot(LoginPage)  }
       
  
   } );

   }



  tab1Root = ScodePage;
  tab2Root = SnotificationPage;
  tab3Root = SsettingsPage;



}
