import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage }    from '../tabs/tabs';

//data base
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { Profile } from '../../models/Profile';
//login
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireAuth } from 'angularfire2/auth'

import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-tpro',
  templateUrl: 'tpro.html',
})
export class TproPage 
{
  profilelist: AngularFireList<any>;

  profile = {} as Profile

  name : string ;
  
  constructor(public afauth : AngularFireAuth , public afdatabase : AngularFireDatabase ,  public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() { console.log('ionViewDidLoad TproPage'); }


  CreateProfile() 
 { 
    
    this.afauth.authState.take(1).subscribe ( auth => { 
     
    this.afdatabase.list('Teachers/' ) .push(this.profile)
  
    .then((auth ) =>  this.navCtrl.push(TabsPage) )     }) 
 }





}
