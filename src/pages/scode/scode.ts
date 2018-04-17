import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-scode',
  templateUrl: 'scode.html',
})
export class ScodePage
{

  dataToCode : string ;
  
  encodedData : {}


  constructor(public barcodeScanner : BarcodeScanner , public navCtrl: NavController, public navParams: NavParams) { }


  ionViewDidLoad() { console.log('ionViewDidLoad ScodePage'); }



  encodeData()

   { 

      this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE , this.dataToCode ) 

      .then ( (res)=> { this.encodedData = res ; } , (err) => { console.log(err) ; }    ) 
    
    }

}
