import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the BarcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {
  format: string;
  text: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private barcodeScanner: BarcodeScanner) {
  }
  barcode() {
    var config: BarcodeScannerOptions = {
      orientation: "landscape"
    };

    this.barcodeScanner.scan(config).then((barcodeData) => {
      this.format = barcodeData.format;//qual formato do codigo lido
      this.text = barcodeData.text;//qual texto lido
    }, (err) => {
      alert("Error");
    });
  }

}
