import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StabsPage } from '../stabs/stabs';

import { Profile } from '../../models/Profile';
//login
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireAuth } from 'angularfire2/auth'

import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
//data base
import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule } from 'angularfire2/database' ;


@IonicPage()
@Component({
  selector: 'page-spro',
  templateUrl: 'spro.html',
})
export class SproPage 
{

profilelist: AngularFireList<any>;

profile = {} as Profile
     
  constructor(private afdatabase : AngularFireDatabase , private afauth : AngularFireAuth ,
     public navCtrl: NavController, public navParams: NavParams) {  }
     
  CreateProfile() 
 { 
    
    this.afauth.authState.take(1).subscribe ( auth => { 
     
    this.afdatabase.list('Students/' ) .push(this.profile)
  
    .then((auth ) =>  this.navCtrl.push(StabsPage) )     }) 
 } 



}
