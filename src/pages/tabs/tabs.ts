import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth'

import { LoginPage }   from '../Login/Login';
import { AboutPage }   from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage }    from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor( public fire:AngularFireAuth , public navCtrl: NavController, public navParams: NavParams)

   { 
     fire.auth.onAuthStateChanged ( function (user) { if(!user) { navCtrl.setRoot(LoginPage)  }
       
  
   } );

   }


}
