import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//pages
import { MyApp } from './app.component';
import { AboutPage }   from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage }    from '../pages/home/home';
import { TabsPage }    from '../pages/tabs/tabs';
import { LoginPage }   from '../pages/Login/Login';
import { LoginStPage } from '../pages/login-st/login-st';
import { LoginTePage } from '../pages/login-te/login-te';
import { SignStPage }  from '../pages/sign-st/sign-st';
import { SignTePage } from '../pages/sign-te/sign-te';
import { ScodePage } from '../pages/scode/scode';
import { SnotificationPage } from '../pages/snotification/snotification';
import { SsettingsPage } from '../pages/ssettings/ssettings';
import { SproPage } from '../pages/spro/spro';
import { TproPage } from '../pages/tpro/tpro';
import { StabsPage } from '../pages/stabs/stabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


//barcode configuration
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//login
import { AngularFireAuthModule } from 'angularfire2/auth'
//data base
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
//local database sqlite
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

//firebase configuration
const config = {
  apiKey: "AIzaSyCLJ1K_gPikkL84mtSUC-1Thp59sq3oKIs",
  authDomain: "gpdb-eef53.firebaseapp.com",
  databaseURL: "https://gpdb-eef53.firebaseio.com",
  storageBucket: "gpdb-eef53.appspot.com",
  messagingSenderId: "257479092799"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    LoginStPage,
    LoginTePage,
    SignStPage,
    SignTePage,
    StabsPage,      
    ScodePage,
    SnotificationPage,
    SsettingsPage ,
    SproPage ,
    TproPage

  ],
  imports: [
    BrowserModule ,
    IonicModule.forRoot(MyApp) ,
    AngularFireModule.initializeApp(config) ,
    AngularFireDatabaseModule ,
    AngularFireAuthModule ,
    IonicStorageModule 
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    LoginStPage,
    LoginTePage,
    StabsPage,
    SignStPage,
    SignTePage,
    ScodePage,
    SnotificationPage,
    SsettingsPage ,
    SproPage ,
    TproPage 


  ],
  providers: [
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
