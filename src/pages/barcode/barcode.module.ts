import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodePage } from './barcode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    BarcodePage,
  ],
  imports: [
    IonicPageModule.forChild(BarcodePage),
  ],
  providers: [
    BarcodeScanner
  ]
})
export class BarcodePageModule {}
