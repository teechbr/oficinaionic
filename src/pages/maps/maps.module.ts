import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsPage } from './maps';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MapsPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsPage),
  ],
  providers:[
    GoogleMaps,
    Geolocation
  ]
})
export class MapsPageModule {}
