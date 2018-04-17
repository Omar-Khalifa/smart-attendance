import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner , BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ///class info
  ClassName : String ;
  nameOfTeacher : String ;
  grade : Number ;
  dept : String ;
  date : Date ;
  ListOfStudent = [] ; //hope it work
/////


data = { }
option:BarcodeScannerOptions ;

  constructor(public navCtrl: NavController ,public barcodeScanner:BarcodeScanner ) {

  }

  Scan (){

    this.option ={
      preferFrontCamera:true

    }
    this.barcodeScanner.scan(this.option).then( (barcodeData) => {
      //Success! Barcode data is here
      console.log(barcodeData);
      this.data = barcodeData;
    }, (err) => {

      //An error occured
      console.log(err);
    });
  }

}
