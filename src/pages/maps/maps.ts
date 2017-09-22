import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker,
  MarkerOptions
 } from '@ionic-native/google-maps';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  map: GoogleMap;
  mapElement: HTMLElement;
  constructor(public navCtrl: NavController, public navParams: NavParams,private googleMaps: GoogleMaps,public alertCtrl: AlertController, public geolocation: Geolocation) {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
      this.loadMap(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      this.showAlert('Error getting location', error);
    }); 
  }

  clickMaker(){
    console.log("start");
    this.map.addEventListener("click").subscribe(event => {
      console.log(event);
      this.showAlert("Position",event);
    });
    console.log("end");
  }

  loadMap(lat:number, lng:number) {
    this.mapElement = document.getElementById('map');
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: lat,
          lng: lng
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);
    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.map.addMarker({
            title: 'Posição Atual',
            icon: 'red',
            animation: 'DROP',
            position: {
              lat: lat,
              lng: lng
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                this.showAlert("Localização!","Latitude: "+lat+"<br/>Longitude: "+lng);
              });
          });

      });
  }

  showAlert(title:string, subTitle:string ) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

}
